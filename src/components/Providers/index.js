import React from 'react';

import { View, SafeAreaView, FlatList, ListItem, Text } from 'react-native';
import { Card } from 'react-native-elements';

import { ProviderItem } from '../ProviderItem';
import { styles } from './styles';


const DATA = [
    {
        id: '1',
        title: 'Jose Rezende',
        icon: 'Pedreiro'
    }, {
        id: '2',
        title: 'Felipe Damasceno',
        icon: 'Piscineiro'
    }, {
        id: '3',
        title: 'Felipe Damasceno',
        icon: 'Piscineiro'
    }, {
        id: '4',
        title: 'Felipe Damasceno',
        icon: 'Piscineiro'
    }, {
        id: '5',
        title: 'Felipe Damasceno',
        icon: 'Piscineiro'
    }, {
        id: '6',
        title: 'Felipe Damasceno',
        icon: 'Piscineiro'
    }, {
        id: '7',
        title: 'Felipe Damasceno',
        icon: 'Piscineiro'
    }, {
        id: '8',
        title: 'Felipe Damasceno',
        icon: 'Piscineiro'
    }
];
export function Providers() {
    const renderItem = ({ item }) => (
        // <ProviderItem item={item} />
        <ListItem
            key={item.id}
            title={item.title}
            subtitle={item.icon}
            leftAvatar={{ source: require('../../assets/fotoPerfil.jpg') }}
        />
    );

    return (
        <View>
            <FlatList data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id} />
        </View>
    );
}