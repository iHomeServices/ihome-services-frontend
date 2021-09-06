import React from 'react';
import FullLogo from '../../assets/full_logo.svg';
import { ScrollView, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { FluidButton } from '../../components/FluidButton';
import { Input } from '../../components/Input';
import { theme } from '../../global/styles/theme';

export function ProviderDetails({ provider }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text>Jose</Text>
                </View>
                <View>
                    <Text>130</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}