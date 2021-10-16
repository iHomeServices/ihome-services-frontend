import React, { useState } from 'react';

import { FlatList } from 'react-native';
import { CategoryItem } from '../CategoryItem';

import { styles } from './styles';

export function Categories({ categories, handleChangeCategory }) {
    const [selectedId, setSelectedId] = useState(1);

    const renderItem = ({ item }) => (
        <CategoryItem
            item={item}
            onPress={() => {
                setSelectedId(item.id);
                handleChangeCategory(item.id);
            }}
            selected={selectedId == item.id} />
    );

    return (
        <FlatList data={categories}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={item => item._id}
            showsHorizontalScrollIndicator={false}
            extraData={selectedId} />
    );
}