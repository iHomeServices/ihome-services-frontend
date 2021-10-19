import React from 'react';

import {
    View,
    Text,
    ActivityIndicator,
} from 'react-native';
import { Rating } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { Image } from 'react-native-elements/dist/image/Image';
import { RoundButton } from '../RoundButton';

export function ProviderItem({ provider, handleClickProvider }) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                style={styles.card}
                onPress={handleClickProvider}>
                <View>

                    <View style={styles.row}>
                        <Image 
                            source={{uri: provider.avatar }}  
                            style={styles.avatar}
                            PlaceholderContent={<ActivityIndicator />} 
                        />
                        <View style={styles.pl20}>
                            <Text style={styles.name}>{provider.name}</Text>
                            <View style={styles.row}>
                                <Rating 
                                    type='custom'
                                    readonly
                                    imageSize={20} 
                                    ratingColor={theme.colors.primary}  
                                    tintColor={theme.colors.white}   
                                    ratingBackgroundColor={theme.colors.lightGray}                 
                                    startingValue={2.5} />

                                <Text style={styles.opinion}>14 opiniões</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{provider.price}</Text>
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.favoriteButton}>
                <RoundButton 
                    iconColor={theme.colors.yellow} 
                    iconName="star-outline" />
            </View>
        </View>
    );
}