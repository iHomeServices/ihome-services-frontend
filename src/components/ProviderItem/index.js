import { Card, Avatar, ListItem } from 'react-native-elements';
import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native';

import { styles } from './styles';

export function ProviderItem({ item }) {
    return (
        <ListItem
            key={item.id}
            title={item.title}
            subtitle={item.icon}
            leftAvatar={{ source: require('../../assets/fotoPerfil.jpg') }}
        />
    );
    // return (
    //     <Card
    //         style={styles.container}
    //         titleStyle={styles.title}
    //         title={item.title}
    //     >
    //         <Avatar
    //             rounded
    //             source={require('../../assets/fotoPerfil.jpg')}
    //         />
    //         <Text
    //             h1
    //             style={styles.h3}
    //         >R$30,00/hr</Text>
    //     </Card>
    // );
}