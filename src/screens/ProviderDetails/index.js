import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StatusBar, Linking } from 'react-native';

import { styles } from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Image } from 'react-native-elements';
import { theme } from '../../global/styles/theme';
import { RoundButton } from '../../components/RoundButton';
import { FluidButton } from '../../components/FluidButton';
import { HeaderProfile } from '../../components/HeaderProfile';
import { DetailOptions } from '../../components/DetailOptions';
import backendAPI from '../../api/backend';

export function ProviderDetails({ route, navigation }) {
    const providerId = route.params.providerId;
    const [provider, setProvider] = useState();
    const [activeSlide, setActiveSlide] = useState(0);

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
            let provider = await backendAPI.get(`/provider/${providerId}`);
            setProvider(provider.data);
            console.log(provider.data)
        } catch (error) {
            console.log(error);
        }
    }

    function handleHiring() {
        Linking.openURL(`sms:${provider.phoneNumber}?body=${"Olá, estou interessado em contratar seu serviço!"}`);
        // Linking.openURL(`whatsapp://send?text='teste'&phone=${provider.phoneNumber}`);
        backendAPI.post(`/service`, {
            providerId: providerId,
            userId: 1,
            date: Date.now(),
        });
    }

    useEffect(() => {
        getProviderById();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
                barStyle={'light-content'}
                showHideTransition={'none'} />

            <View style={styles.carouselContainer}>
                <View style={styles.carouselTopBarContainer}>
                    <View style={styles.carouselControlRow}>
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

                <View style={styles.wh100}>
                    <Carousel
                        data={entries}
                        sliderWidth={theme.metrics.screenWidth}
                        itemWidth={theme.metrics.screenWidth}
                        renderItem={(data) => {
                            return (
                                <View style={styles.carouselItemContainer}>
                                    <Image
                                        style={styles.carouselItemImage}
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
                    containerStyle={styles.dotContainer}
                    dotStyle={[styles.dotStructure, styles.dotPrimary]}
                    inactiveDotStyle={[styles.dotStructure, styles.dotInactive]}
                    inactiveDotOpacity={1}
                    inactiveDotScale={1}
                />
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.detailsContainer}>
                    <HeaderProfile provider={provider} />
                    <DetailOptions />
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.heading}>
                    {provider && provider.price}
                </Text>
                <View style={styles.w60}>
                    <FluidButton
                        onPress={handleHiring}
                        text={"Contratar"} />
                </View>
            </View>
        </View>
    );
}