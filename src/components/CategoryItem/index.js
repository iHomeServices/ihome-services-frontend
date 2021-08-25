import React from 'react';

import {
    View,
    Text
} from 'react-native';
import { Card, Image, Divider, Title } from 'react-native-elements'

import { styles } from './styles';

export function CategoryItem({ item }) {
    return (
        <Card>
            <Card.Title>{item.title}</Card.Title>
            <Card.Divider />
            <View key={item.id} style={styles.user}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }}
                />
                <Text style={styles.name}>{item.icon}</Text>
            </View>
        </Card>
    );
}