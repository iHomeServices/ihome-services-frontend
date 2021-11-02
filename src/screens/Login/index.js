import React, { useEffect, useState } from 'react';
import FullLogo from '../../assets/full_logo.svg';
import { ScrollView, Text, View, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { FluidButton } from '../../components/FluidButton';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

export function Login({ navigation }) {
    const {theme} = useTheme();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {login, user, loading} = useAuth();

    const handleLoginClick = async () => {
        if(!username || !password) {
            return;
        }
        
        await login({username, password});
    }

    useEffect(() => {
        if (user._id) {
            navigation.navigate('Home');
        }
    }, [user]);

    return (
        <SafeAreaView style={styles(theme).container}>
            <KeyboardAvoidingView>
                <ScrollView>
                    <View style={styles(theme).logoContainer}>
                        <FullLogo width={"60%"} height={300} />
                    </View>

                    <View style={styles(theme).section}>
                        <View style={styles(theme).article}>
                            <Text style={styles(theme).title}>
                                Bem-vindo
                            </Text>
                            <Text style={styles(theme).text}>
                                Faça o login para alcançar mais
                                profissionais
                            </Text>
                        </View>

                        <View style={styles(theme).formGroup}>
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

                        <View style={styles(theme).footer}>
                            <Text style={styles(theme).boldText} onPress={() => navigation.navigate('Register')}>
                                Criar uma nova conta
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}