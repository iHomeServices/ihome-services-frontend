import React from 'react';

import { ActivityIndicator, Image, Text, View } from 'react-native';
import default_avatar from '../../assets/default_avatar.png';

import {styles} from './styles';

export function HeaderProfile({provider}) {
    const avatar = provider.avatar ? {uri: provider.avatar} : default_avatar;

    return (
        <View style={styles.row}>
            <View>
                <Text style={styles.heading}>
                    {provider?.name}
                </Text>
                <Text style={styles.subHeading}>
                    {provider?.city}
                    {provider.state && `, ${provider.state}`}
                </Text>
            </View>
            <Image
                source={avatar}
                style={styles.avatar}
                PlaceholderContent={<ActivityIndicator />} />
        </View>
    );
}