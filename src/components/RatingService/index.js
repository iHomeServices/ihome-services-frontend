import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {Pressable, Text, View} from 'react-native';
import { Rating } from 'react-native-elements';
import { FluidButton } from '../FluidButton';
import { Input } from '../Input';

import {styles} from './styles';
import { useTheme } from '../../hooks/theme';

export function RatingService({
    handleRating,
    handleClose,
}) {
    const {theme} = useTheme();
    const [rating, setRating] = React.useState(0);
    const [comment, setComment] = React.useState('');

    return (
        <View style={styles(theme).centeredView}>
            <View style={styles(theme).modalView}>
                <View style={styles(theme).header}>
                    <Text style={styles(theme).title}>
                        Avaliar
                    </Text>
                    
                    <Pressable onPress={handleClose}>
                        <Feather name="x" size={24} color={theme.colors.primary} />
                    </Pressable>
                </View>

                <Rating 
                    value={rating}
                    onFinishRating={(value) => setRating(value)}
                    type='custom'
                    imageSize={30} 
                    ratingColor={theme.colors.primary}  
                    tintColor={theme.colors.background }   
                    ratingBackgroundColor={theme.colors.dark}                 
                    startingValue={5} />
                    
                <View style={styles(theme).textareaContainer}>
                    <Input
                        label='Comentário'
                        value={comment}
                        onChangeText={(text) => setComment(text)}
                        multiline={true}
                        numberOfLines={3}
                    />
                </View>

                <FluidButton
                    onPress={() => {
                        handleRating({
                            rating: rating,
                            comment: comment,
                        })
                    }}
                    text='Avaliar e finalizar'
                />
            </View>
        </View>
    );
}