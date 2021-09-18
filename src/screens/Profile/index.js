import React from 'react';
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
    const loggedUser = getLoggedUser();

    const getLoggedUser = () => {
        const loggedUser = DATA.find(provider => provider.id === JSON.stringify(userId));
        return loggedUser;
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>{loggedUser.name}</Text>
                </View>
                <View>
                    <Text>{loggedUser.price}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}