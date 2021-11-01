import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

import {Pressable, Text, View} from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RoundButton } from '../../components/RoundButton';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import {styles} from './styles';

export function Settings({navigation}) {
    const {logout} = useAuth();
    const {theme, toggleTheme} = useTheme();

    const [changeTheme, setChangeTheme] = useState(false);

    function handleChangeTheme() {
        setChangeTheme(!changeTheme);
        toggleTheme(changeTheme);
    }

    function handleLogout(){
        navigation.navigate('Login');
        logout();
    }

    async function loadTheme() {
        const chosenTheme = await AsyncStorage.getItem('theme');
        if(chosenTheme === 'dark'){
            setChangeTheme(false);
        }else{
            setChangeTheme(true);
        }
    }

    useEffect(() => {
        loadTheme();
    }, []);

    return (
        <SafeAreaView style={styles(theme).container}>
            <View style={styles(theme).header}>
                <RoundButton
                    iconName="keyboard-arrow-left"
                    iconColor={theme.colors.dark}
                    iconSize={35}
                    onPress={() => navigation.goBack()}
                    noShadow
                />

                <Text style={styles(theme).title}>Configurações</Text>
            </View>

            <View style={styles(theme).content}>
                <View style={styles(theme).rowSpaceBetween}>
                    <Text style={[styles(theme).itemText]}>
                        Mudar tema
                    </Text>
                    <Switch
                        value={changeTheme}
                        onValueChange={handleChangeTheme}
                    />
                </View>
            </View>

            <View style={styles(theme).content}>
                <Pressable
                    onPress={handleLogout}
                >
                    <Text style={[styles(theme).itemText, styles(theme).logoutText]}>
                        Sair do app
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}