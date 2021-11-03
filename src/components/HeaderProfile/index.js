import React, { useEffect, useState } from 'react';

import { ActivityIndicator, Alert, Image, Platform, Pressable, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import default_avatar from '../../assets/default_avatar.png';
import { useTheme } from '../../hooks/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import backendAPI from '../../api/backend';

export function HeaderProfile({ provider, editPhoto = false }) {
    const { theme } = useTheme();

    const [imageSource, setImageSource] = useState(default_avatar);

    async function requestPermission(){
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission to access camera roll is required!');
        }

        return status
    }

    async function handleEditPhoto() {
        if(editPhoto === false){
            return
        }

        const permission = await requestPermission();
        
        if (permission !== 'granted') {
            return
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 4],
            // base64: true,
            quality: 1,
        });
        
        if(result.cancelled){
            return;
        }

        // ImagePicker saves the taken photo to disk and returns a local URI to it
        let localUri = result.uri;
        let filename = localUri.split('/').pop();

        // Infer the type of the image
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        // Upload the image using the fetch and FormData APIs
        let formData = new FormData();
        formData.append('avatar', { uri: localUri, name: filename, type });
        
        const response = await backendAPI.post('/provider/upload-avatar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 200) {
            setImageSource({uri: result.uri});
        }
    }

    async function searchAvatar(filename){
        try{
            const response = await backendAPI.get(`/avatar/${filename}`);
    
            if (response.status === 200) {
                setImageSource({uri: `data:${response.data.contentType};base64,${response.data.image}`});
            }
        }catch(error){
            setImageSource(default_avatar);
        }
    }

    useEffect(() => {
        searchAvatar(provider.avatar);
    }, [])

    return (
        <View style={styles(theme).row}>
            <View>
                <Text style={styles(theme).heading}>
                    {provider?.name}
                </Text>
                <Text style={styles(theme).subHeading}>
                    {provider?.city}
                    {provider.state && `, ${provider.state}`}
                </Text>
            </View>
            <Pressable onPress={handleEditPhoto}>
                <Image
                    source={imageSource}
                    style={styles(theme).avatar}
                    PlaceholderContent={<ActivityIndicator />} />

                {editPhoto &&
                    <MaterialIcons
                        name="photo-camera"
                        style={styles(theme).icon} />
                }
            </Pressable>
        </View>
    );
}