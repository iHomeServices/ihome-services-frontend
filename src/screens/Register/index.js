import React, { useState } from 'react';
import FullLogo from '../../assets/full_logo.svg';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { FluidButton } from '../../components/FluidButton';
import { Input } from '../../components/Input';
import { CheckBox } from 'react-native-elements';
import { useAuth } from '../../hooks/auth';

export function Register({ navigation }) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isProvider, setIsProvider] = useState(false);

    const {register, user, loading} = useAuth();

    async function onRegister() {
        if (!name || !username || !password) {
            return;
        }

        try{
            await register({
                name,
                username,
                password,
                isProvider
            });

            navigation.navigate('Login');
        } catch(error) {
            Alert.alert('Erro', error.message);
        }
    }

    function toLogin() {
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.logoContainer}>
                    <FullLogo width={"60%"} height={300} />
                </View>

                <View style={styles.section}>
                    <View style={styles.article}>
                        <Text style={styles.title}>
                            Olá
                        </Text>
                        <Text style={styles.text}>
                            Preencha os campos abaixo para 
                            se cadastrar na plataforma.
                        </Text>
                    </View>

                    <View style={styles.formGroup}>
                        <Input 
                            value={name}
                            onChangeText={setName}
                            label="Nome" />
                        <Input 
                            label="Usuário" 
                            value={username}
                            onChangeText={setUsername} />
                        <Input 
                            label="Senha" 
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true} />
                        <CheckBox
                            center  
                            title='Sou prestador de serviço'  
                            checkedIcon='dot-circle-o'  
                            uncheckedIcon='circle-o'  
                            checked={isProvider}
                            onPress={() => setIsProvider(!isProvider)}
                        />
                    </View>

                    <FluidButton
                        onPress={onRegister}
                        isLoading={loading}
                        text="CADASTRAR" />

                    <View style={styles.footer}>
                        <Text style={styles.boldText} 
                            onPress={toLogin}>
                            Já tenho uma conta!
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}