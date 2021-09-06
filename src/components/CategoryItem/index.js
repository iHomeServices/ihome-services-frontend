import React, { useState } from 'react';

import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function CategoryItem({ item, onPress, selected }) {

    return (
        <RectButton
            style={[styles.container, selected ? styles.selected : '']}
            onPress={onPress}>
            <Icon name={item.icon}
                size={35}
                color={selected ? theme.colors.white : theme.colors.text2} />
                
            <Text style={[styles.name, selected ? styles.textWhite : '']}>
                {item.name}
            </Text>
        </RectButton>
    );
}