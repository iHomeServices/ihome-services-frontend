import React from 'react';

import {Text, TextInput, View} from 'react-native';
import { useTheme } from '../../hooks/theme';

import {styles} from './styles';

export function Input({
    label,
    type,
    value,
    ...props
}) {
    const {theme} = useTheme();
    return (
        <View>
            <Text style={styles(theme).label}>{label}</Text>
            <TextInput 
                value={value}
                style={styles(theme).input}
                autoCapitalize='none'
                keyboardType={type}
                autoCorrect={false}
                {...props}
            />
        </View>
    );
}