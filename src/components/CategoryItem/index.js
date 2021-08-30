import React from 'react';

import {
    View,
    Text
} from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';

export function CategoryItem({ item }) {
    return (
        <View style={styles.container}>
            <Icon name={item.icon} size={18} color="#999" />
            <Text>{item.name}</Text>
        </View>
        // <Card>
        //     <Card.Title>{item.title}</Card.Title>
        //     <Card.Divider />
        //     <View key={item.id} style={styles.user}>
        //         <Image
        //             style={styles.image}
        //             resizeMode="cover"
        //             source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }}
        // <Text style={styles.name}>{item.icon}</Text>
        //         />
        //     </View>
        // </Card>
    );
}