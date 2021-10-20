import React, { useEffect, useState } from 'react';

import { FlatList } from 'react-native';
import { CategoryItem } from '../CategoryItem';

import { styles } from './styles';

export function Categories({ categories, handleChangeCategory }) {
    const [selectedId, setSelectedId] = useState('');

    // useEffect(() => {
    //     console.log(categories);
    //     setSelectedId(categories[0]._id);
    //     handleChangeCategory(categories[0]._id);
    // }, []);

    const renderItem = ({ item }) => {
        if (item.name === 'Eletricista') {
            setSelectedId(item._id);
            handleChangeCategory(item._id);
        }
        return (
            <CategoryItem
                item={item}
                onPress={() => {
                    setSelectedId(item._id);
                    handleChangeCategory(item._id);
                }}
                selected={selectedId == item._id} />
        );
    }

    return (
        <FlatList data={categories}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={item => item._id}
            showsHorizontalScrollIndicator={false}
            extraData={selectedId} />
    );
}