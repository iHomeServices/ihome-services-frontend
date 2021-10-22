import React from 'react';

import { ActivityIndicator, Image, Text, View } from 'react-native';

import {styles} from './styles';

export function HeaderProfile({provider}) {
    return (
        <View style={styles.row}>
            <View>
                <Text style={styles.heading}>
                    {provider?.name}
                </Text>
                <Text style={styles.subHeading}>
                    {provider?.city}{`, `}
                    {provider?.state}
                </Text>
                <Text style={styles.category}>
                    Eletricista
                </Text>
            </View>
            <Image
                source={{ uri: provider?.avatar }}
                style={styles.avatar}
                PlaceholderContent={<ActivityIndicator />} />
        </View>
    );
}