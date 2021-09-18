import React, { useEffect, useState } from 'react';
import FullLogo from '../../assets/full_logo.svg';
import { ScrollView, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { styles } from './styles';
import { FluidButton } from '../../components/FluidButton';
import { Input } from '../../components/Input';
import { theme } from '../../global/styles/theme';
import { DATA } from '../../components/Providers';

export function Profile({ route, navigation }) {
    const userId = route.params.userId;
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(DATA.find(provider => provider.id === userId));
    }, [user]);

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>{user && user.name}</Text>
                </View>
                <View>
                    <Text>{user && user.price}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}