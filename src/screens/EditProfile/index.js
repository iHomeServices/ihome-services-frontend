import React, { useState } from 'react';

import {View} from 'react-native';
import { Input } from '../../components/Input';
import { PickerField } from '../../components/PickerField';

import {styles} from './styles';

export function EditProfile() {
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
        <View style={styles.container}>
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
    );
}