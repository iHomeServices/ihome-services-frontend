import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { HeaderProfile } from '../../components/HeaderProfile';
import { RoundButton } from '../../components/RoundButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ModalView } from '../../components/ModalView';
import { EditProfile } from '../EditProfile';

export function Profile({ route, navigation }) {
    const userId = route.params.userId;
    const [user, setUser] = useState();
    const [openEditProfile, setOpenEditProfile] = useState(false);

    /* const [services, setServices] = useState([]);

    async function getServices() {
        try {
            setServices(categories.data);
        } catch (error) {
            console.log(error);
        }
    } */

    return (
        <>
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

                        <View style={styles.card}>
                            <Text style={styles.title}>
                                Meus dados
                            </Text>

                            <View>
                                <Text style={styles.text}>
                                    Email: felipe98_stz@hotmail.com
                                </Text>
                                <Text style={styles.text}>
                                    Fone: (16) 99242-8576
                                </Text>
                                <Text style={styles.text}>
                                    Idade: 22 anos
                                </Text>
                            </View>

                            <TouchableOpacity
                                onPress={() => setOpenEditProfile(true)}
                                style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Editar dados
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.heading}>
                            Em andamento
                        </Text>

                        <View style={[styles.card, styles.serviceProgressCard]}>
                            <Text style={styles.noServiceProgress}>
                                Nenhum serviço em andamento
                            </Text>
                        </View>

                    </ScrollView>

                </View>
                <ModalView
                    closeModal={() => setOpenEditProfile(false)}
                    visible={openEditProfile}>
                    <EditProfile />
                </ModalView>
            </SafeAreaView>
        </>
    );
}