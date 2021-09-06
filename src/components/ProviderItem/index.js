import React from 'react';

import {
    View,
    Text,
    Button,
    Image,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

export function ProviderItem({ provider, handleClickProvider }) {
    return (
        <RectButton
            onPress={handleClickProvider}
        >
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={require('../../assets/fotoPerfil.jpg')}
                />
                <Text style={styles.name}>{provider.name}</Text>
                <Text style={styles.price}>{provider.price}</Text>
            </View>
        </RectButton>
    );
}