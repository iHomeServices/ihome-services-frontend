import React from 'react';

import {
    FlatList,
    View,
    Text
} from 'react-native';
import { CommentItem } from '../CommentItem';

import { styles } from './styles';

const DATA = [
    {
        id: '1',
        name: 'Jane Doe',
        comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`,
        raiting: 4,
        date: '12/12/2018',
    },
    {
        id: '2',
        name: 'Natasha Zapata',
        comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        raiting: 5,
        date: '12/12/2018',
    },
    {
        id: '3',
        name: 'Patterson',
        comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        raiting: 3,
        date: '12/12/2018',
    },
    {
        id: '4',
        name: 'Reade',
        comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        raiting: 2,
        date: '12/12/2018',
    },
]

export function Comments({comments}){
    const renderItem = ({ item }) => (
        <CommentItem item={item} />
    );

    return (
        <FlatList data={comments}
            style={styles.container}
            renderItem={renderItem}
            ListEmptyComponent={<View style={styles.empty}>
                <Text style={styles.emptyText}>Ainda não tem avaliações</Text>
            </View>}
            vertical={true}
            keyExtractor={item => item._id} />
    );
}