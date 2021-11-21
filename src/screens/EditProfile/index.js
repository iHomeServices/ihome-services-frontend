import React, { useState } from 'react';

import { Alert, Text, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import backendAPI from '../../api/backend';
import { FluidButton } from '../../components/FluidButton';
import { Input } from '../../components/Input';
import { PickerField } from '../../components/PickerField';
import { RoundButton } from '../../components/RoundButton';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import { styles } from './styles';

export function EditProfile({ route, navigation }) {
    const user = route.params.userProfile;

    const { updateUser } = useAuth();
    const { theme } = useTheme();

    const states = [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO',
    ];

    const [isLoading, setIsLoading] = useState(false);
    const [state, setState] = useState(user.state);
    const [city, setCity] = useState(user.city);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [email, setEmail] = useState(user.email);	
    const [categoryId, setCategoryId] = useState(user.categoryId);
    const [description, setDescription] = useState(user.description);

    async function onEditProfile() {
        try {
            setIsLoading(true);

            let formData = {
                state,
                city,
                phoneNumber,
                email,
                categoryId: categoryId,
                description
            } 

            const response = await backendAPI.put('/provider/edit/'+user._id, {
                ...formData
            });

            if (response.status === 200) {
                await updateUser(formData);
                navigation.navigate('Profile');
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Ocorreu um erro ao editar seu perfil');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <SafeAreaView
            style={[styles(theme).container]}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView>
                    <View style={styles(theme).header}>
                        <RoundButton
                            iconName="keyboard-arrow-left"
                            iconColor={theme.colors.dark}
                            iconSize={35}
                            onPress={() => navigation.goBack()}
                            noShadow
                        />

                        <Text style={styles(theme).title}>Editar Perfil</Text>
                    </View>

                    <View style={[styles(theme).row]}>
                        <View style={styles(theme).col40}>
                            <PickerField
                                label="UF"
                                items={states}
                                selectedValue={state}
                                onValueChange={(itemValue, itemIndex) => {
                                    setState(itemValue);
                                }} />
                        </View>
                        <View style={styles(theme).col60}>
                            <Input
                                value={city}
                                onChangeText={(text) => setCity(text)}
                                label="Cidade" />
                        </View>
                    </View>

                    <Input
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        label="Telefone" />

                    <Input
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        label="E-mail" />

                    {
                        user.isProvider &&
                        <>
                            <PickerField
                                label="Categoria"
                                items={global.CATEGORIES}
                                selectedValue={categoryId}
                                onValueChange={(itemValue, itemIndex) => {
                                    setCategoryId(itemValue);
                                }} 
                            />
                            <Input
                                value={description}
                                onChangeText={(text) => setDescription(text)}
                                multiline={true}
                                numberOfLines={4}
                                label="Descrição" 
                            />
                        </>
                    }

                    <FluidButton
                        text="Salvar"
                        isLoading={isLoading}
                        onPress={() => onEditProfile()}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}