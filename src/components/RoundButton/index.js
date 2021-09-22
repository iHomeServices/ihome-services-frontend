import React from 'react';

import { RectButton } from 'react-native-gesture-handler';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';

export function RoundButton({iconName, iconColor, ...rest}) {
    return (
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <MaterialIcons 
                style={{
                    color: iconColor
                }} 
                size={25}
                name={iconName} />
        </RectButton>
    );
}