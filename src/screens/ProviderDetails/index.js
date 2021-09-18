import React, { useEffect, useState } from 'react';
import FullLogo from '../../assets/full_logo.svg';
import { ScrollView, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { FluidButton } from '../../components/FluidButton';
import { Input } from '../../components/Input';
import { theme } from '../../global/styles/theme';
import { DATA } from '../../components/Providers';

export function ProviderDetails({ route, navigation }) {
    const providerId = route.params.providerId;
    const [provider, setProvider] = useState();

    useEffect(() => {
        setProvider(DATA.find(provider => provider.id === providerId));
    }, [provider]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text>{provider && provider.name}</Text>
                </View>
                <View>
                    <Text>{provider && provider.price}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}