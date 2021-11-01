import React, { useEffect, useState } from 'react';
import { Text, View, StatusBar, Linking, Alert } from 'react-native';

import { styles } from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Image } from 'react-native-elements';
import { RoundButton } from '../../components/RoundButton';
import { FluidButton } from '../../components/FluidButton';
import { HeaderProfile } from '../../components/HeaderProfile';
import { DetailOptions } from '../../components/DetailOptions';
import backendAPI from '../../api/backend';
import { Loader } from '../../components/AnimatedLoader';
import { useTheme } from '../../hooks/theme';

export function ProviderDetails({ route, navigation }) {
    const providerId = route.params.providerId;

    const {theme} = useTheme()
    const [provider, setProvider] = useState({});
    const [activeSlide, setActiveSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const entries = [
        {
            illustration: 'https://i.imgur.com/UYiroysl.jpg'
        },
        {
            illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
        },
    ];

    async function getProviderById() {
        try {
            let providerResponse = await backendAPI.get(`/provider/${providerId}`);
            setProvider(providerResponse.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    // separar botões: Conversar profissinal, e outro botão de contratar
    function handleHiring() {
        const message = `Olá, gostaria de contratar você para realizar um serviço.`;
        const urlWhatsapp = `whatsapp://send?text=${message}&phone=${provider.phoneNumber}`
        const urlSms = `sms:${provider.phoneNumber}?body=${message}`
        
        Linking.canOpenURL(urlWhatsapp)
            .then((supported) => {
                backendAPI.post(`/provider/service`, {
                    providerId: providerId,
                    userId: 1,
                    date: Date.now(),
                }).catch(error => {
                    console.log('Falha na adição de um serviço', error);
                });

                if (!supported) {
                    return Linking.openURL(urlSms)
                } else {
                    return Linking.openURL(urlWhatsapp)
                }
            })
            .catch((err) => Alert.alert('Erro', 'Não foi possível abrir o aplicativo'));
    }

    useEffect(() => {
        getProviderById();
    }, []);

    return (
        <View style={styles(theme).container}>
            <Loader visible={isLoading} />

            <StatusBar
                backgroundColor="transparent"
                translucent={true}
                barStyle={'light-content'}
                showHideTransition={'none'} />

            <View style={styles(theme).carouselContainer}>
                <View style={styles(theme).carouselTopBarContainer}>
                    <View style={styles(theme).carouselControlRow}>
                        <RoundButton
                            iconName="keyboard-arrow-left"
                            iconColor={theme.colors.dark}
                            onPress={() => navigation.goBack()}
                        />
                        <RoundButton
                            iconName="star-outline"
                            iconColor={theme.colors.yellow}
                            onPress={() => { }}
                        />
                    </View>
                </View>

                <View style={styles(theme).wh100}>
                    <Carousel
                        data={entries}
                        sliderWidth={theme.metrics.screenWidth}
                        itemWidth={theme.metrics.screenWidth}
                        renderItem={(data) => {
                            return (
                                <View style={styles(theme).carouselItemContainer}>
                                    <Image
                                        style={styles(theme).carouselItemImage}
                                        source={{ uri: data.item.illustration }} />
                                </View>
                            )
                        }}
                        onSnapToItem={(index) => setActiveSlide(index)}
                    />
                </View>
                <Pagination
                    dotsLength={entries.length}
                    activeDotIndex={activeSlide}
                    containerStyle={styles(theme).dotContainer}
                    dotStyle={[styles(theme).dotStructure, styles(theme).dotPrimary]}
                    inactiveDotStyle={[styles(theme).dotStructure, styles(theme).dotInactive]}
                    inactiveDotOpacity={1}
                    inactiveDotScale={1}
                />
            </View>

            <View style={styles(theme).contentContainer}>
                <View style={styles(theme).detailsContainer}>
                    <HeaderProfile provider={provider} />
                    <DetailOptions 
                        comments={provider.services}
                        description={provider.description} />
                </View>
            </View>

            <View style={styles(theme).footer}>
                <Text style={styles(theme).heading}>
                    {provider.price}
                </Text>
                <View style={styles(theme).w60}>
                    <FluidButton
                        onPress={handleHiring}
                        text={"Contratar"} />
                </View>
            </View>
        </View>
    );
}