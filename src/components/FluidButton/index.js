import React from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import {styles} from './styles';

export function FluidButton({
    text, 
    isLoading = false,
    ...rest
}){
    return (
        <Pressable
            style={[styles.container, rest.style]}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <Text style={styles.textButton}>
                    {text}
                </Text>
            )}
        </Pressable>
    )
}