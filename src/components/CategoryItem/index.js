import React from 'react';

import {
    View,
    Text
} from 'react-native';
import { Icon } from 'react-native-elements'

import { styles } from './styles';

export function CategoryItem({item}) {
    return (
        <View style={styles.card}>
            <Icon name={item.icon} color='#00aced' />
            <Text>{item.title}</Text>
        </View>
    );
}