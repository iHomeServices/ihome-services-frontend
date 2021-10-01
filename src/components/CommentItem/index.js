import React from 'react';

import {
    Text,
    View
} from 'react-native';
import { Rating } from 'react-native-elements';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function CommentItem({item}){
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.name}>
                    {item.name}
                </Text>
                <Text style={styles.comment}>
                    {item.comment}
                </Text>
                <Rating
                    type='custom'
                    readonly
                    imageSize={20} 
                    ratingColor={theme.colors.primary}  
                    tintColor={theme.colors.white}   
                    ratingBackgroundColor={theme.colors.lightGray}                 
                    startingValue={2.5} />
            </View>
        </View>
    );
}