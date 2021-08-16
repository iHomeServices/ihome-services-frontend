import React from 'react';

import {Text, TextInput, View} from 'react-native';

import {styles} from './styles';

export function Input({
    label,
    type,
    value,
    onChange,
    ...props
}) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                style={styles.input}
                keyboardType={type}
                {...props}
            />
        </View>
    );
}