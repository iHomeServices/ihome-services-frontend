import React from 'react';

import {Pressable, Text, View} from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RoundButton } from '../../components/RoundButton';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';

import {styles} from './styles';

export function Settings({navigation}) {
    const {logout} = useAuth();

    function handleLogout(){
        navigation.navigate('Login');
        logout();
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <RoundButton
                    iconName="keyboard-arrow-left"
                    iconColor={theme.colors.dark}
                    iconSize={35}
                    onPress={() => navigation.goBack()}
                    noShadow
                />

                <Text style={styles.title}>Configurações</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.item}>
                    <Pressable style={styles.rowSpaceBetween}>
                        <Text style={[styles.itemText]}>
                            Mudar tema
                        </Text>
                        <Switch
                            value={true}
                            onValueChange={(value) => {}}
                        />
                    </Pressable>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.item}>
                    
                    <Pressable
                        onPress={handleLogout}
                    >
                        <Text style={[styles.itemText, styles.logoutText]}>
                            Sair do app
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}