import React from 'react';
import FullLogo from '../../assets/full_logo.svg';
import {ScrollView, Text, View, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {styles} from './styles';
import { FluidButton } from '../../components/FluidButton';
import { Input } from '../../components/Input';

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
                        <Input 
                            label="Email"
                            keyboardType='email-address'
                            autoCompleteType='email' />
                        <Input 
                            label="Senha" 
                            secureTextEntry={true} />
                    </View>

                    <FluidButton 
                        onPress={() => navigation.navigate('Home')}
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