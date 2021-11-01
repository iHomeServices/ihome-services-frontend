import React from 'react';

import { ActivityIndicator, Image, Text, View } from 'react-native';
import default_avatar from '../../assets/default_avatar.png';
import { useTheme } from '../../hooks/theme';

import {styles} from './styles';

export function HeaderProfile({provider}) {
    const {theme} = useTheme();

    const avatar = provider.avatar ? {uri: provider.avatar} : default_avatar;

    return (
        <View style={styles(theme).row}>
            <View>
                <Text style={styles(theme).heading}>
                    {provider?.name}
                </Text>
                <Text style={styles(theme).subHeading}>
                    {provider?.city}
                    {provider.state && `, ${provider.state}`}
                </Text>
            </View>
            <Image
                source={avatar}
                style={styles(theme).avatar}
                PlaceholderContent={<ActivityIndicator />} />
        </View>
    );
}