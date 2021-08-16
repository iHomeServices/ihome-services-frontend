import React from 'react';
import FullLogo from '../../assets/full_logo.svg';
import {ScrollView, Text, View, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {styles} from './styles';
import { FluidButton } from '../../components/FluidButton';
import { Input } from '../../components/Input';
import { theme } from '../../global/styles/theme';

export function Login({ navigation }) {
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
                        <Input label="Login" />
                        <Input 
                            label="Password" 
                            secureTextEntry={true} />
                    </View>

                    <Button 
                        onPress={() => navigation.navigate('Home')}
                        color={theme.colors.secondary} 
                        title="LOGIN" />

                    <View>
                        
                    </View>
                </View>

            
            </ScrollView>
        </SafeAreaView>
    );
}