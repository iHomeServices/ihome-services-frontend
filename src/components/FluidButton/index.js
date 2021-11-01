import React from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useTheme } from '../../hooks/theme';

import {styles} from './styles';

export function FluidButton({
    text, 
    isLoading = false,
    ...rest
}){
    const {theme} = useTheme();

    return (
        <Pressable
            style={[styles(theme).container, rest.style]}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <Text style={styles(theme).textButton}>
                    {text}
                </Text>
            )}
        </Pressable>
    )
}