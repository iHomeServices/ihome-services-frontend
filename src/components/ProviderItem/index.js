import React from 'react';

import {
    View,
    Text,
    ActivityIndicator,
} from 'react-native';
import default_avatar from '../../assets/default_avatar.png';
import { Rating } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { styles } from './styles';
import { Image } from 'react-native-elements/dist/image/Image';
import { RoundButton } from '../RoundButton';
import { useTheme } from '../../hooks/theme';

export function ProviderItem({ provider, handleClickProvider }) {
    const {theme} = useTheme();

    const uri = provider.avatar?.contentType 
        ? `data:${provider.avatar?.contentType};base64,${provider.avatar?.image}` 
        : provider.avatar;

    const avatar = provider.avatar ? { uri: uri } : default_avatar;
    const rating = Math.floor(Math.random() * (50 - 5 + 1) + 5)
    const starRating = Math.floor(Math.random() * (5 - 3 + 1) + 3)

    return (
        <View style={styles(theme).container}>
            <TouchableWithoutFeedback
                style={styles(theme).card}
                onPress={handleClickProvider}>
                <View>
                    <View style={styles(theme).row}>
                        <Image 
                            source={avatar}  
                            style={styles(theme).avatar}
                            PlaceholderContent={<ActivityIndicator />} 
                        />
                        <View style={styles(theme).pl20}>
                            <Text style={styles(theme).name}>{provider.name}</Text>
                            <View style={styles(theme).row}>
                                <Rating 
                                    type='custom'
                                    readonly
                                    imageSize={20} 
                                    ratingColor={theme.colors.primary}  
                                    tintColor={theme.colors.white}   
                                    ratingBackgroundColor={theme.colors.lightGray}                 
                                    startingValue={starRating} />

                                <Text style={styles(theme).opinion}>{rating} opiniões</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={styles(theme).priceContainer}>
                    <Text style={styles(theme).price}>{provider.price}</Text>
                </View>
            </TouchableWithoutFeedback>

            <View style={styles(theme).favoriteButton}>
                <RoundButton 
                    iconColor={theme.colors.yellow} 
                    iconName="star-outline" />
            </View>
        </View>
    );
}