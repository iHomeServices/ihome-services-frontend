import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Button, ActivityIndicator, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { DATA } from '../../components/Providers';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Image } from 'react-native-elements';
import { theme } from '../../global/styles/theme';
import { RoundButton } from '../../components/RoundButton';

export function ProviderDetails({ route, navigation }) {
    const providerId = route.params.providerId;
    const [provider, setProvider] = useState();
    const [activeSlide, setActiveSlide] = useState(0);

    const entries = [
        {
            title: 'First item',
            subtitle: 'Subtitle',
            illustration: 'https://i.imgur.com/UYiroysl.jpg'
        },
        {
            title: 'Second item',
            subtitle: 'Subtitle',
            illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
        },
    ];

    useEffect(() => {
        setProvider(DATA.find(provider => provider.id === providerId));
    }, [provider]);

    const Dots = () => {
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.dotContainer}
                dotStyle={[styles.dotStructure, styles.dotPrimary]}
                inactiveDotStyle={[styles.dotStructure, styles.dotInactive]}
                inactiveDotOpacity={1}
                inactiveDotScale={1}
            />
        );
    }

    const CarouselItem = ({data}) => {
        const {item} = data;

        return (
            <View style={styles.carouselItemContainer}>
                <Image style={styles.carouselItemImage} source={{uri: item.illustration}} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
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
                            onPress={() => {}}
                        />
                    </View>
                </View>

                <Carousel
                    data={entries}
                    sliderWidth={theme.metrics.screenWidth}
                    itemWidth={theme.metrics.screenWidth}
                    renderItem={(item) => <CarouselItem data={item} />}
                    onSnapToItem={(index) => setActiveSlide(index) }
                />
                <Dots />
            </View>
            <View style={{
                backgroundColor: theme.colors.primary,
                
            }}>

            </View>

            {/* <ScrollView>
                <View>
                    <Text>{provider && provider.name}</Text>
                </View>
                <View>
                    <Text>{provider && provider.price}</Text>
                </View>
            </ScrollView> */}
        </View>
    );
}