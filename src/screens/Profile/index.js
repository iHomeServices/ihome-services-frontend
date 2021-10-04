import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { DATA } from '../../components/Providers';
import { HeaderProfile } from '../../components/HeaderProfile';
import { RoundButton } from '../../components/RoundButton';

export function Profile({ route, navigation }) {
    const userId = route.params.userId;
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(DATA.find(provider => provider.id === userId));
    }, [user]);

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header}>
                <RoundButton 
                    iconName="keyboard-arrow-left"
                    iconColor={theme.colors.dark}
                    iconSize={35}
                    onPress={() => navigation.goBack()}
                    noShadow
                />
                <View style={styles.profile}>
                    <HeaderProfile provider={user} />
                </View>
            </View>

            <View style={styles.contentContainer}>
                <ScrollView style={styles.content}>

                </ScrollView>
            </View>                
        </SafeAreaView>
    );
}