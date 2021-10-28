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
                    <Input label="Cidade" />
                </View>
            </View>

            <Input label="Telefone" />
            <Input label="E-mail" />

            <FluidButton
                text="Salvar"
                onPress={() => {}}
            />
        </SafeAreaView>
    );
}