import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {Pressable, Text, View} from 'react-native';
import { Rating } from 'react-native-elements';
import { theme } from '../../global/styles/theme';
import { FluidButton } from '../FluidButton';
import { Input } from '../Input';

import {styles} from './styles';

export function RatingService({
    handleRating,
    handleClose,
}) {
    const [rating, setRating] = React.useState(0);
    const [comment, setComment] = React.useState('');

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.header}>
                    <Text style={styles.title}>
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
                    
                <View style={styles.textareaContainer}>
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