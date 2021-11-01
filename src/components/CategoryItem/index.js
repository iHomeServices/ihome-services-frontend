import React, { useState } from 'react';

import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../global/styles/theme';
import { useTheme } from '../../hooks/theme';

import { styles } from './styles';

export function CategoryItem({ item, onPress, selected }) {
    const {theme} = useTheme()

    return (
        <RectButton
            style={[styles(theme).container, selected ? styles(theme).selected : '']}
            onPress={onPress}>
            <Icon name={item.icon}
                size={35}
                color={selected ? '#fff': theme.colors.text2} />
                
            <Text style={[styles(theme).name, selected ? styles(theme).textWhite : '']}>
                {item.name}
            </Text>
        </RectButton>
    );
}