import React from 'react';

import { RectButton } from 'react-native-gesture-handler';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../hooks/theme';

import {styles} from './styles';

export function RoundButton({
    iconName,
    iconColor,
    iconSize,
    noShadow,
    ...rest
}) {
    
    const {theme} = useTheme();

    return (
        <RectButton 
            style={[
                styles(theme).container,
                noShadow ? null : styles(theme).shadow
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