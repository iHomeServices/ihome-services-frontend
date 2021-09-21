import React, { useState } from 'react';
import FullLogo from '../../assets/full_logo.svg';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { FluidButton } from '../../components/FluidButton';
import { Input } from '../../components/Input';
import { PickerField } from '../../components/PickerField';

export function Register({ navigation }) {
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
                        <Input label="Nome" />
                        <Input 
                            label="Email" 
                            keyboardType="email-address"
                            autoCompleteType="email" />
                        <Input 
                            label="Senha" 
                            secureTextEntry={true} />

                        <View style={styles.row}>
                            <View style={[styles.col50, styles.pr10]}>
                                <Input label="CEP" 
                                    keyboardType="numeric" />
                            </View>
                            <View style={styles.col50}>
                                <Input label="Número"
                                    keyboardType="number-pad" />
                            </View>
                        </View>

                        <Input 
                            label="Endereço"
                            autoCompleteType="street-address" />
                        <Input label="Bairro" />
                        
                        <View style={styles.row}>
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
                                <Input label="Cidade" />
                            </View>
                        </View>
                    </View>

                    <FluidButton 
                        onPress={() => navigation.navigate('Home', {
                            userId: '2'
                        })}
                        text="CADASTRAR" />

                    <View style={styles.footer}>
                        <Text style={styles.boldText} 
                            onPress={() => navigation.navigate('Login')}>
                            Já tenho uma conta!
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}