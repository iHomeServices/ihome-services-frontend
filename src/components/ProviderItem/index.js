import { Card, Icon } from 'react-native-elements';
import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native';

import { styles } from './styles';

export function ProviderItem({ item }) {
    return (
        <Card>
            <Card.Title>{item.title}</Card.Title>
            <Card.Divider />
            <Card.Image source={require('../../assets/fotoPerfil.jpg')}>
                <Text style={{ marginBottom: 10 }}>
                    {item.icon}
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='VIEW NOW' />
            </Card.Image>
        </Card>
    );
}