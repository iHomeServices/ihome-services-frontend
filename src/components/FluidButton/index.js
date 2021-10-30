import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import {styles} from './styles';

export function FluidButton({
    text, 
    isLoading = false, 
    ...rest
}){
    return (
        <RectButton 
            style={styles.container}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <Text style={styles.textButton}>
                    {text}
                </Text>
            )}
        </RectButton>
    );
}