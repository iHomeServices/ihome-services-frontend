import React from 'react';

import {
    View,
    Text,
    Image,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

export function ProviderItem({ provider, handleClickProvider }) {
    return (
        <RectButton
            style={styles.container}
            onPress={handleClickProvider}
        >
            <Image
                style={styles.avatar}
                source={require('../../assets/fotoPerfil.jpg')}
            />
            <Text style={styles.name}>{provider.name}</Text>
            <Text style={styles.price}>{provider.price}</Text>
        </RectButton>
    );
}