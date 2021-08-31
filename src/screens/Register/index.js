import React from 'react';
import FullLogo from '../../assets/full_logo.svg';
import {ScrollView, Text, View, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {styles} from './styles';
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
                            Preencha os campos abaixa para 
                            se cadastrar na plataforma.
                        </Text>
                    </View>

                    <View style={styles.formGroup}>
                        <Input label="Nome" />
                        <Input label="Email" />
                        <Input label="Senha" 
                            secureTextEntry={true} />

                        <View style={styles.row}>
                            <View style={styles.col50}>
                                <Input label="CEP" />
                            </View>
                            <View style={styles.col50}>
                                <Input label="Número" />
                            </View>
                        </View>

                        <Input label="Endereço" />
                        <Input label="Bairro" />
                        
                        <View style={styles.row}>
                            <View style={styles.col30}>
                                <PickerField 
                                    label="UF" 
                                    items={states} 
                                    selectedValue={'SP'}
                                    onValueChange={(itemValue, itemIndex) => {}} />
                            </View>
                            <View style={styles.col70}>
                                <Input label="Cidade" />
                            </View>
                        </View>
                    </View>

                    <FluidButton 
                        onPress={() => navigation.navigate('Home')}
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