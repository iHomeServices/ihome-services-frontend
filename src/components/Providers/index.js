import React from 'react';

import { View, SafeAreaView, FlatList, ListItem, Text } from 'react-native';
import { Card } from 'react-native-elements';

import { ProviderDetails } from '../../screens/ProviderDetails';
import { ProviderItem } from '../ProviderItem';
import { styles } from './styles';

const DATA = [
    {
        id: '1',
        name: 'Jose Rezende',
        price: 'R$30/hr',
        categoryId: '1',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '2',
        name: 'Felipe Damasceno',
        price: 'R$30/hr',
        categoryId: '1',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '3',
        name: 'André Ditomaso',
        price: 'R$30/hr',
        categoryId: '2',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '4',
        name: 'Daniel Ramos',
        price: 'R$30/hr',
        categoryId: '3',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '5',
        name: 'Gustavo Borges',
        price: 'R$30/hr',
        categoryId: '1',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '6',
        name: 'Henrique Cardoso',
        price: 'R$30/hr',
        categoryId: '2',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '7',
        name: 'João Ferreira',
        price: 'R$30/hr',
        categoryId: '1',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '8',
        name: 'Gabriel Nunes',
        price: 'R$30/hr',
        categoryId: '1',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, {
        id: '9',
        name: 'Bruno Tomaz',
        price: 'R$30/hr',
        categoryId: '3',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, 
    {
        id: '10',
        name: 'Alex Santos',
        price: 'R$30/hr',
        categoryId: '1',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    }, 
    {
        id: '11',
        name: 'Alex Santos',
        price: 'R$30/hr',
        categoryId: '1',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    },
    {
        id: '12',
        name: 'Alex Santos',
        price: 'R$30/hr',
        categoryId: '1',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    },
    {
        id: '13',
        name: 'Alex Santos',
        price: 'R$30/hr',
        categoryId: '1',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    },
    {
        id: '14',
        name: 'Alex Santos',
        price: 'R$30/hr',
        categoryId: '1',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    },
    {
        id: '15',
        name: 'Alex Santos',
        price: 'R$30/hr',
        categoryId: '1',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    },
    {
        id: '16',
        name: 'Alex Santos',
        price: 'R$30/hr',
        categoryId: '1',
        rating: 4,
        imageUrl: '../../assets/fotoPerfil.jpg'
    },

];

export function Providers({ categoryId, navigation }) {
    const handleClickProvider = provider => navigation.navigate('ProviderDetails', {
        provider: provider,
    });

    const renderProvider = (provider) => provider.item.categoryId === categoryId
        && <ProviderItem
            provider={provider.item}
            handleClickProvider={handleClickProvider} />

    return (
        <FlatList data={DATA}
            renderItem={renderProvider}
            keyExtractor={provider => provider.id} />
    );
}