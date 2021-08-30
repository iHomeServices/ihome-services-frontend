import React from 'react';

import { View, SafeAreaView, FlatList, ListItem, Text } from 'react-native';
import { Card } from 'react-native-elements';

import { ProviderItem } from '../ProviderItem';
import { styles } from './styles';


const DATA = [
    {
        id: '1',
        name: 'Jose Rezende',
        price: 'R$30/hr',
        category: 'Eletricista',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '2',
        name: 'Felipe Damasceno',
        price: 'R$30/hr',
        category: 'Eletricista',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '3',
        name: 'Felipe Damasceno',
        price: 'R$30/hr',
        category: 'Eletricista',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '4',
        name: 'Felipe Damasceno',
        price: 'R$30/hr',
        category: 'Eletricista',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '5',
        name: 'Felipe Damasceno',
        price: 'R$30/hr',
        category: 'Eletricista',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '6',
        name: 'Felipe Damasceno',
        price: 'R$30/hr',
        category: 'Eletricista',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '7',
        name: 'Felipe Damasceno',
        price: 'R$30/hr',
        category: 'Eletricista',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '8',
        name: 'Felipe Damasceno',
        price: 'R$30/hr',
        category: 'Eletricista',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '9',
        name: 'Felipe Damasceno',
        price: 'R$30/hr',
        category: 'Eletricista',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '10',
        name: 'Felipe Damasceno',
        price: 'R$30/hr',
        category: 'Eletricista',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }
];
export function Providers() {
    const renderProvider = (provider) => (
        <ProviderItem provider={provider.item} />
    );

    return (
        <FlatList data={DATA}
            renderItem={renderProvider}
            keyExtractor={provider => provider.id} />
    );
}