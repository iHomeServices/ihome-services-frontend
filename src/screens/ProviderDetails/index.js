import React from 'react';
import FullLogo from '../../assets/full_logo.svg';
import { ScrollView, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { FluidButton } from '../../components/FluidButton';
import { Input } from '../../components/Input';
import { theme } from '../../global/styles/theme';

export function ProviderDetails({ route, navigation }) {
    const provider = route.params.provider.item;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text>{provider.name}</Text>
                </View>
                <View>
                    <Text>{provider.price}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}