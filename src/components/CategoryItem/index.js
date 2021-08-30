import React, {useState} from 'react';

import {
    View,
    Text
} from 'react-native';
import { Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function CategoryItem({ item, isSelected, onPress }) {

    return (
        <RectButton 
            onPress={onPress}
            style={[styles.container, isSelected ? styles.selected : '']}>
            <Icon name={item.icon} 
                size={35} 
                color={theme.colors.text2} />
            <Text style={styles.name}>{item.name}</Text>
        </RectButton>
    );
}