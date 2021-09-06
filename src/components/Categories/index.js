import React, { useState } from 'react';

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
export function Categories({ handleChangeCategory, ...rest }) {
    const [selectedId, setSelectedId] = useState('1');

    const renderItem = ({ item }) => (
        <CategoryItem
            item={item}
            onPress={() => {
                setSelectedId(item.id);
                handleChangeCategory(item.id);
            }}
            selected={selectedId === item.id ? true : false} />
    );

    return (
        <FlatList data={DATA}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            extraData={selectedId} 
            {...rest} />
    );
}