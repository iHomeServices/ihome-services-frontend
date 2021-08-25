import React from 'react';

import { View, SafeAreaView, FlatList, Text } from 'react-native';

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
        title: 'Andre Ditomaso',
        icon: 'Pintor'
    }
];
export function Providers() {
    const renderItem = ({item}) => (
        // console.log(item)
        <ProviderItem item={item} />
    );

    return (
        <FlatList data={DATA} 
            renderItem={renderItem} 
            keyExtractor={item => item.id} />
    );
}