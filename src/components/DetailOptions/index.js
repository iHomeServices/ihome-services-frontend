import React, {useState} from 'react';

import {Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

import {Description} from '../../components/Description';
import { Comments } from '../Comments';
import {styles} from './styles';

export function DetailOptions() {
    const options = [
        {id: 1, title: 'Descrição', icon: 'info'},
        {id: 2, title: 'Avaliações', icon: 'message-square'},
        {id: 3, title: 'Compartilhar', icon: 'share-2'},
    ];

    const [activatedItem, setActivatedItem] = useState(1);

    return (
        <>
            <View style={styles.container}>
                {options.map(option => 
                    <Item
                        isActive={activatedItem === option.id}
                        key={option.id}
                        title={option.title}
                        icon={option.icon}
                        onPressItem={() => setActivatedItem(option.id)}
                    />
                )}
            </View>

            {activatedItem === 2 ? <Comments /> : <Description />}
        </>
    );
}

function Item({title, icon, isActive, onPressItem}) {
    return (
        <TouchableWithoutFeedback 
            onPress={onPressItem}
            style={styles.item}>
            <Feather 
                style={[
                    styles.icon, 
                    isActive ? styles.active : ''
                ]}
                name={icon} 
                size={32} />

            <Text style={[
                styles.title, 
                isActive ? styles.active : ''
            ]}>
                {title}
            </Text>
        </TouchableWithoutFeedback>
    );
}