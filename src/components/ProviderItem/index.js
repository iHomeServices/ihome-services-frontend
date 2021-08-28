import React from 'react';

import {
    View,
    Text,
    Button,
    Image,
} from 'react-native';

import { styles } from './styles';

export function ProviderItem({ provider }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={require('../../assets/fotoPerfil.jpg')}
            />
            <Text style={styles.name}>{provider.name}</Text>
            <Text style={styles.category}>{provider.category}</Text>
            <Text style={styles.price}>{provider.price}</Text>
        </View>
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