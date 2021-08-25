import React from 'react';

import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { CategoryItem } from '../CategoryItem';

import { styles } from './styles';


const DATA = [
    {
        id: '1',
        title: 'First Item',
        icon: 'g-translate'
    }, {
        id: '2',
        title: 'Second Item',
        icon: 'g-translate'
    }, {
        id: '3',
        title: 'Second Item',
        icon: 'g-translate'
    }, {
        id: '4',
        title: 'Second Item',
        icon: 'g-translate'
    }, {
        id: '6',
        title: 'Second Item',
        icon: 'g-translate'
    }, {
        id: '7',
        title: 'Second Item',
        icon: 'g-translate'
    }, {
        id: '8',
        title: 'Second Item',
        icon: 'g-translate'
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