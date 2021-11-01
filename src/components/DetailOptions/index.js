import React, {useState} from 'react';

import {Alert, Linking, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Description} from '../../components/Description';
import { useTheme } from '../../hooks/theme';
import { Comments } from '../Comments';
import {styles} from './styles';

export function ItemOption({title, icon, isActive, vector = 'Feather', onPressItem}) {
    const {theme} = useTheme();

    const vectorComponent = {
        'Feather': Feather,
        'MaterialCommunityIcons': MaterialCommunityIcons,
    }

    const Icon = vectorComponent[vector];
    return (
        <TouchableWithoutFeedback 
            onPress={onPressItem}
            style={styles(theme).item}>
            <Icon
                style={[
                    styles(theme).icon, 
                    isActive ? styles(theme).active : ''
                ]}
                name={icon} 
                size={32} />

            <Text style={[
                styles(theme).title, 
                isActive ? styles(theme).active : ''
            ]}>
                {title}
            </Text>
        </TouchableWithoutFeedback>
    );
}

export function DetailOptions({
    description,
    comments
}) {
    const {theme} = useTheme();
    const [activatedItem, setActivatedItem] = useState(1);

    const options = [
        {id: 1, title: 'Descrição', icon: 'info'},
        {id: 2, title: 'Avaliações', icon: 'message-square'},
        {id: 3, title: 'Compartilhar', icon: 'share-2', callback: shareDescription },
    ];

    function shareDescription() {
        // share description in whatsapp
        const message = `Olha só o serviço que encontrei no iHomeServices \n\n ${description}`;
        const urlWhatsapp = `whatsapp://send?text=${message}`
        const urlSms = `sms:body=${message}`
        
        Linking.canOpenURL(urlWhatsapp)
            .then((supported) => {
                if (!supported) {
                    return Linking.openURL(urlSms)
                } else {
                    return Linking.openURL(urlWhatsapp)
                }
            })
            .catch((err) => Alert.alert('Erro', 'Não foi possível compartilhar a descrição.'));
    }

    return (
        <>
            <View style={styles(theme).container}>
                {
                    options.map(option => {
                        return <ItemOption
                            isActive={activatedItem === option.id}
                            key={option.id}
                            title={option.title}
                            icon={option.icon}
                            onPressItem={() => {
                                setActivatedItem(option.id)
                                option.callback && option.callback();
                            }}
                        />
                    })
                }
            </View>

            {activatedItem === 2 
                ? <Comments comments={comments} /> 
                : <Description description={description} />
            }
        </>
    );
}