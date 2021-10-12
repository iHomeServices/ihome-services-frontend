import React from 'react';

import { ActivityIndicator, Image, Text, View } from 'react-native';

import {styles} from './styles';

export function HeaderProfile({provider}) {
    return (
        <View style={styles.row}>
            <View>
                <Text style={styles.heading}>
                    {/* {provider && provider.name} */}
                    Felipe
                </Text>
                <Text style={styles.subHeading}>
                    São Carlos, SP
                </Text>
                <Text style={styles.category}>
                    Eletricista
                </Text>
            </View>
            <Image
                source={{ uri: 'https://github.com/FelipeSD.png' }}
                style={styles.avatar}
                PlaceholderContent={<ActivityIndicator />} />
        </View>
    );
}