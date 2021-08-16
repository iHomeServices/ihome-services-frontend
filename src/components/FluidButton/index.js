import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import {styles} from './styles';

export function FluidButton({text, ...rest}){
    return (
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <Text style={styles.textButton}>
                {text}
            </Text>
        </RectButton>
    );
}