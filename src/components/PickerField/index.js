import React from 'react';

import {Picker} from '@react-native-picker/picker';

import {styles} from './styles';
import { Text, View } from 'react-native';

export function PickerField({items, label, ...rest}) {
    
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.container}>
                <Picker {...rest} >
                    {items.map((item, index) => (
                        <Picker.Item key={index} label={item} value={item} />
                    ))}
                </Picker>
            </View>
        </View>
    );
}