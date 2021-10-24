import React, { useEffect, useState } from 'react';

import { FlatList } from 'react-native';
import { CategoryItem } from '../CategoryItem';

import { styles } from './styles';

export function Categories({ categories, handleChangeCategory, selectedCategory }) {
    const renderItem = ({ item }) => {
        return (
            <CategoryItem
                item={item}
                onPress={() => {
                    handleChangeCategory(item._id);
                }}
                selected={selectedCategory == item._id} />
        );
    }

    return (
        <FlatList data={categories}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={item => item._id}
            showsHorizontalScrollIndicator={false}
            extraData={selectedCategory} />
    );
}