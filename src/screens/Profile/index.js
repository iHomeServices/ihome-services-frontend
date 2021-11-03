import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import backendAPI from '../../api/backend';
import { styles } from './styles';
import { HeaderProfile } from '../../components/HeaderProfile';
import { RoundButton } from '../../components/RoundButton';
import { RatingService } from '../../components/RatingService';
import { useAuth } from '../../hooks/auth';
import { Loader } from '../../components/AnimatedLoader';
import { useTheme } from '../../hooks/theme';
import { ItemOption } from '../../components/DetailOptions';

export function Profile({ navigation }) {
    const {user} = useAuth();
    const {theme} = useTheme();

    const [isLoading, setIsLoading] = useState(true);
    const [isModalRatingOpen, setIsModalRatingOpen] = useState(false);
    const [endingService, setEndingService] = useState('');
    const [userProfile, setUserProfile] = useState({});

    const [activatedItem, setActivatedItem] = useState(1);

    async function getProviderById(){
        try{
            const response = await backendAPI.get(`/provider/${user._id}`);
            setUserProfile(response.data);
            // console.log(user._id, response.data);

            // console.log(userProfile.services)
        }catch(err){
            Alert.alert('Erro', 'Erro ao buscar serviços');
        }

        setIsLoading(false);
    }

    function handleCancelService(id){
        Alert.alert('Cancelar', 'Deseja cancelar esse serviço?',
        [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => cancelService(id)
            }
        ]);
    }

    function handleFinishService(id){
        Alert.alert('Finalizar', 'Deseja finalizar esse serviço?',
        [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => {
                    setEndingService(id);
                    setIsModalRatingOpen(true)
                }
            }
        ]);
    }

    async function cancelService(id) {
        try{
            const response = await backendAPI.delete(`/provider/cancel-service/${id}`);
            console.log(response.data);
        }catch(err){
            Alert.alert('Erro', 'Erro ao cancelar serviço');
        }
    }

    async function finishService(formData){
        try{
            // salvar avaliação e finalizar serviço
            const response = await backendAPI.post(`/provider/finish-service/${endingService}`, {
                rating: formData.rating,
                comment: formData.comment
            });
            console.log(response.data);
        }catch(err){
            Alert.alert('Erro', 'Erro ao finalizar serviço');
        }
    }

    function findCategory(id){
        return global.CATEGORIES.find(service => service._id === id);
    }
    
    function findProvider(id){
        return global.PROVIDERS.find(provider => provider._id === id);
    }

    function InProgressService(props){
        const provider = findProvider(props.item.idProvider);
        const category = findCategory(provider?.categoryId);

        if(
            (props.item.isDone && activatedItem == 2)
            || (!props.item.isDone && activatedItem == 1)
        ){
            return (
                <View style={styles(theme).card}>
                    <View>
                        <Text style={styles(theme).text}>
                            Profissional: {provider.name}
                        </Text>
                        <Text style={styles(theme).text}>
                            Categoria: {category?.name}
                        </Text>
                        <Text style={styles(theme).text}>
                            Início em: {props.item.startDate}
                        </Text>
                    </View>
                    {
                        !props.item.isDone &&
                        <View style={styles(theme).rowButtonContainer}>
                            <Pressable 
                                onPress={() => handleCancelService(props.item._id)} // colocar no parametro o id do serviço
                                style={[styles(theme).outlineButton, styles(theme).borderDanger]}>
                                <Text style={styles(theme).textDanger}>
                                    Cancelar
                                </Text>
                            </Pressable>
                            <Pressable 
                                onPress={() => handleFinishService(props.item._id)} // colocar no parametro o id do serviço
                                style={[styles(theme).outlineButton, styles(theme).borderSecondary]}>
                                <Text style={styles(theme).textSecondary}>
                                    Finalizar
                                </Text>
                            </Pressable>
                        </View>
                    }
                </View>
            )
        }else{
            return null;
        }
    }

    useEffect(() => {
        // encontrar serviços do usuario que estão em andamento e finalizados
        getProviderById();
    }, [])

    return (
        <>
            <SafeAreaView style={styles(theme).container}>
                <Loader visible={isLoading} />
                <View style={styles(theme).header}>
                    <RoundButton
                        iconName="keyboard-arrow-left"
                        iconColor={theme.colors.dark}
                        iconSize={35}
                        onPress={() => navigation.goBack()}
                        noShadow
                    />
                    <View style={styles(theme).profile}>
                        <HeaderProfile 
                            editPhoto={true}
                            provider={userProfile} />
                    </View>
                </View>

                <View style={styles(theme).contentContainer}>
                    <View style={styles(theme).card}>
                        <Text style={styles(theme).title}>
                            Meus dados
                        </Text>

                        <View>
                            <Text style={styles(theme).text}>
                                Email: {userProfile.email ? userProfile.email : 'Não informado'}
                            </Text>
                            <Text style={styles(theme).text}>
                                Fone: {userProfile.phoneNumber ? userProfile.phoneNumber : 'Não informado'}
                            </Text>
                        </View>
                        
                        <View style={styles(theme).buttonContainer}>
                            <Pressable
                                onPress={() => navigation.navigate('EditProfile', {
                                    userProfile
                                })}>
                                <Text style={styles(theme).buttonText}>
                                    Editar dados
                                </Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles(theme).optionsService}>
                        <ItemOption
                            isActive={activatedItem === 1}
                            title={"Em andamento"}
                            vector="MaterialCommunityIcons"
                            icon={"progress-wrench"}
                            onPressItem={() => {
                                setActivatedItem(1)
                            }} />
                        <ItemOption
                            isActive={activatedItem === 2}
                            title={"Finalizados"}
                            icon={"check-circle"}
                            onPressItem={() => {
                                setActivatedItem(2)
                            }} />
                    </View>

                    <FlatList data={userProfile.services}
                        renderItem={InProgressService}
                        ListEmptyComponent={<View style={styles(theme).emptyContainer}>
                            <Text style={styles(theme).emptyText}>Não foi encontrado</Text>
                        </View>}
                        vertical={true}
                        keyExtractor={item => item._id} />

                </View>
            </SafeAreaView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalRatingOpen}
                onRequestClose={() => {
                    setEndingService(null);
                }}>
                    <RatingService 
                        handleClose={() => setIsModalRatingOpen(false)}
                        handleRating={(formData) => {
                            setIsModalRatingOpen(false)
                            finishService(formData)
                        }}
                    />
            </Modal>
        </>
    );
}