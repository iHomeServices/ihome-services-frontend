import React, { useEffect, useState } from 'react';
import FullLogo from '../../assets/full_logo.svg';
import { Alert, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { FluidButton } from '../../components/FluidButton';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/auth';

export function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {login, user, loading} = useAuth();

    const handleLoginClick = async () => {
        if(!username || !password) {
            return;
        }
        try {
            await login({username, password});
        } catch (error) {
            Alert.alert('Login', error.message);
        }
    }

    useEffect(() => {
        if (user._id) {
            navigation.navigate('Home');
        }
    }, [user]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.logoContainer}>
                    <FullLogo width={"60%"} height={300} />
                </View>

                <View style={styles.section}>
                    <View style={styles.article}>
                        <Text style={styles.title}>
                            Bem-vindo
                        </Text>
                        <Text style={styles.text}>
                            Faça o login para alcançar mais
                            profissionais
                        </Text>
                    </View>

                    <View style={styles.formGroup}>
                        <Input
                            value={username}
                            onChangeText={setUsername}
                            label="Usuário" />
                        <Input
                            label="Senha"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true} />
                    </View>

                    <FluidButton
                        onPress={handleLoginClick}
                        isLoading={loading}
                        text="LOGIN" />

                    <View style={styles.footer}>
                        <Text style={styles.boldText} onPress={() => navigation.navigate('Register')}>
                            Criar uma nova conta
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}