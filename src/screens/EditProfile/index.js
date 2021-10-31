import React, { useEffect, useState } from 'react';

import { Alert, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import backendAPI from '../../api/backend';
import { FluidButton } from '../../components/FluidButton';
import { Input } from '../../components/Input';
import { PickerField } from '../../components/PickerField';
import { RoundButton } from '../../components/RoundButton';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

export function EditProfile({ route, navigation}) {
    const {user, setUser} = useAuth();

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

    const [state, setState] = useState(states[0]);
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');	

    useEffect(() => {
        // buscar dados do usuário
    }, []);
    
    async function onEditProfile() {
        try {
            let formData = {
                state,
                city,
                phone,
                email
            } 

            const response = await backendAPI.put('/provider/edit/'+user._id, {
                userId: user._id,
                ...formData
            });

            if (response.status === 200) {
                setUser({
                    ...user,
                    ...formData
                });

                navigation.goBack();
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Ocorreu um erro ao editar seu perfil');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <RoundButton
                    iconName="keyboard-arrow-left"
                    iconColor={theme.colors.dark}
                    iconSize={35}
                    onPress={() => navigation.goBack()}
                    noShadow
                />

                <Text style={styles.title}>Editar Perfil</Text>
            </View>

            <View style={[styles.row]}>
                <View style={styles.col40}>
                    <PickerField
                        label="UF"
                        items={states}
                        selectedValue={state}
                        onValueChange={(itemValue, itemIndex) => {
                            setState(itemValue);
                        }} />
                </View>
                <View style={styles.col60}>
                    <Input 
                        value={city}
                        onChangeText={(text) => setCity(text)}
                        label="Cidade" />
                </View>
            </View>

            <Input 
                value={phone}
                onChangeText={(text) => setPhone(text)}
                label="Telefone" />

            <Input 
                value={email}
                onChangeText={(text) => setEmail(text)}
                label="E-mail" />

            <FluidButton
                text="Salvar"
                onPress={() => onEditProfile()}
            />
        </SafeAreaView>
    );
}