import React from 'react';

import {
    Text,
    View
} from 'react-native';
import { Rating } from 'react-native-elements';
import { useTheme } from '../../hooks/theme';

import { styles } from './styles';

export function CommentItem({item}){
    const {theme} = useTheme();

    return (
        <View style={styles(theme).container}>
            <View style={styles(theme).card}>
                <Text style={styles(theme).name}>
                    {item.nameCustomer}
                </Text>
                <Text style={styles(theme).comment}>
                    {item.comment || '(Sem comentário)'}
                </Text>

                <View style={styles(theme).rating}>
                    <Rating
                        type='custom'
                        readonly
                        imageSize={20} 
                        ratingColor={theme.colors.primary}  
                        tintColor={theme.colors.white}   
                        ratingBackgroundColor={theme.colors.lightGray}                 
                        startingValue={item.rating} />
                    <Text style={styles(theme).ratingText}>
                        {item.rating}
                    </Text>
                </View>
            </View>
        </View>
    );
}