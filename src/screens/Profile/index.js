import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { HeaderProfile } from '../../components/HeaderProfile';
import { RoundButton } from '../../components/RoundButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Profile({ route, navigation }) {
    const userId = route.params.userId;
    const [user, setUser] = useState();

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
                    <ScrollView>

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
                            
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('EditProfile')}>
                                    <Text style={styles.buttonText}>
                                        Editar dados
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text style={styles.heading}>
                            Em andamento
                        </Text>

                        {/* <View style={styles.card}>
                            <Text style={styles.noServiceProgress}>
                                Nenhum serviço em andamento
                            </Text>
                        </View> */}

                        <View style={styles.card}>
                            <View style={{
                                marginBottom: 20,
                            }}>
                                <Text style={styles.text}>
                                    Profissional: José Rezende
                                </Text>
                                <Text style={styles.text}>
                                    Categoria: Eletricista
                                </Text>
                                <Text style={styles.text}>
                                    Início em: 10/10/2021
                                </Text>
                            </View>

                            <View style={styles.rowButtonContainer}>
                                <TouchableOpacity style={[styles.outlineButton, styles.borderDanger]}>
                                    <Text style={styles.textDanger}>
                                        Cancelar
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.outlineButton, styles.borderSecondary]}>
                                    <Text style={styles.textSecondary}>
                                        Finalizar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    );
}