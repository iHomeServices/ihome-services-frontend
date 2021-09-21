import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Button, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { DATA } from '../../components/Providers';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Image } from 'react-native-elements';
import { theme } from '../../global/styles/theme';

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
                containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    const ImageItem = ({data}) => {
        const {item, index} = data;

        return (
            <View style={{
                width: theme.metrics.screenWidth,
                flex: 1,
                backgroundColor: "#000",
                flexDirection: "row", flexWrap: "wrap",
                height: 200
              }}>
                <Image
                    style={{ 
                        flex: 1,
                        width: theme.metrics.screenWidth
                    }}
                    source={{ 
                        // uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9LHKKyy726fcel7Ow7yARwRtu27qxMTQSQ&usqp=CAU" 
                        uri: item.illustration
                    }}
                    PlaceholderContent={<ActivityIndicator />} 
                />
            </View>
        )
    }

    return (
        <View>
            <View style={{height: 300}}>
                <Carousel
                    data={entries}
                    renderItem={(item) => <ImageItem data={item} />}
                    onSnapToItem={(index) => setActiveSlide(index) }
                    sliderWidth={theme.metrics.screenWidth}
                    itemWidth={theme.metrics.screenWidth}
                    containerCustomStyle={{
                        backgroundColor: theme.colors.background,
                        flex: 1
                    }}
                />
                <Dots />
            </View>
            <View>

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