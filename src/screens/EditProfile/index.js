import React, { useState } from 'react';

import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FluidButton } from '../../components/FluidButton';
import { Input } from '../../components/Input';
import { PickerField } from '../../components/PickerField';
import { RoundButton } from '../../components/RoundButton';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function EditProfile({ route, navigation}) {
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

            <Text style={styles.subtitle}>Endereço</Text>
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

            <View style={[styles.row, styles.mb20]}>
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

            <FluidButton
                text="Salvar"
                onPress={() => {}}
            />
        </SafeAreaView>
    );
}