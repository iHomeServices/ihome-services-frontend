import React from 'react';

import { RectButton } from 'react-native-gesture-handler';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';

export function RoundButton({
    iconName,
    iconColor,
    iconSize,
    noShadow,
    ...rest
}) {
    return (
        <RectButton 
            style={[
                styles.container,
                noShadow ? null : styles.shadow
            ]}
            {...rest}
        >
            <MaterialIcons 
                style={{
                    color: iconColor
                }} 
                size={iconSize || 25}
                name={iconName} />
        </RectButton>
    );
}