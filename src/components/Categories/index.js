import React from 'react';

import { FlatList } from 'react-native';
import { CategoryItem } from '../CategoryItem';

import { styles } from './styles';


const DATA = [
    {
        id: '1',
        name: 'Eletricista',
        icon: 'flash'
    }, {
        id: '2',
        name: 'Pedreiro',
        icon: 'home'
    }, {
        id: '3',
        name: 'Piscineiro',
        // dont have the icon
        icon: 'grav'
    }, {
        id: '4',
        name: 'Pintor',
        icon: 'paint-brush'
    }, {
        id: '5',
        name: 'Jardineiro',
        icon: 'leaf'
    }, {
        id: '6',
        name: 'Jardineiro',
        icon: 'leaf'
    }, {
        id: '7',
        name: 'Jardineiro',
        icon: 'leaf'
    }
];
export function Categories() {
    const renderItem = ({item}) => (
        // console.log(item)
        <CategoryItem item={item} />
    );

    return (
        <FlatList data={DATA} 
            renderItem={renderItem} 
            horizontal={true}
            keyExtractor={item => item.id} />
    );
}