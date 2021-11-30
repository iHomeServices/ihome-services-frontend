import React, { useEffect, useState } from 'react';
import { View, Linking, Alert } from 'react-native';

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
    const [isHiring, setIsHiring] = useState(false);

    const entries = [
        {
            illustration: 'http://s2.glbimg.com/amTRhLJlZ_tkpnbJRaSSlIYk4Rg=/290x217/s2.glbimg.com/PYiM5z8JJ1GnE5Hjcr4ktrKfpJo=/620x465/s.glbimg.com/jo/g1/f/original/2016/06/13/celpe_pauta_20_-_como_a_fiacao_eletrica_pode_influenciar_no_gasto_de_energia_-_foto.jpg'
        },
        {
            illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyn8V4p-pRqw3zhIygWhox9nWSYRWAaLY8uWte3t9ukKsnJ_EGh_mwy3MkH3vNIMIAnUw&usqp=CAU'
        },
        {
            illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuO6WBH7HL4usdMjwjAMvm-yHIfQynrT4dIQ_al1ZU8Q-60yRmAfFAe1-iOY3QdXakxJw&usqp=CAU'
        },
        {
            illustration: 'https://blog.telhanorte.com.br/wp-content/uploads/2020/07/eletricista-residencial-e1605100222158.jpg'
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
    function handleChat() {
        const message = `Olá, gostaria de contratar você para realizar um serviço.`;
        const urlWhatsapp = `whatsapp://send?text=${message}&phone=${provider.phoneNumber}`
        const urlSms = `sms:${provider.phoneNumber}?body=${message}`
        
        Linking.canOpenURL(urlWhatsapp)
            .then((supported) => {
                if (!supported) {
                    return Linking.openURL(urlSms)
                } else {
                    return Linking.openURL(urlWhatsapp)
                }
            })
            .catch((err) => Alert.alert('Erro', 'Não foi possível abrir o aplicativo'));
    }

    async function handleHiring(){
        setIsHiring(true);
        try{
            const response = await backendAPI.post(`/provider/service`, {
                providerId: providerId,
                userId: 1,
                date: Date.now(),
            });
            
            if(response.status === 200){
                Alert.alert("O profissional foi contratado com sucesso.")
            }
        }catch(error){
            console.log(error);
        } finally {
            setIsHiring(false);
        }        
    }

    useEffect(() => {
        getProviderById();
    }, []);

    return (
        <View style={styles(theme).container}>
            <Loader visible={isLoading} />            

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
                <View style={styles(theme).w50}>
                    <FluidButton
                        isLoading={isHiring}
                        onPress={handleHiring}
                        text={"Contratar"} />
                </View>
                <View style={styles(theme).w50}>
                    <FluidButton
                        onPress={handleChat}
                        text={"Conversar"} />
                </View>
            </View>
        </View>
    );
}