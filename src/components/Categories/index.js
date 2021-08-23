import React from 'react';

import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { CategoryItem } from '../CategoryItem';

import { styles } from './styles';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        icon: 'g-translate'
    }, {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        icon: 'g-translate'
    }, {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
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