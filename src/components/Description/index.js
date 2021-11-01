import React from 'react';

import {ScrollView, Text, View} from 'react-native';
import { useTheme } from '../../hooks/theme';

import {styles} from './styles';

export function Description({description}) {
    const {theme} = useTheme()
    return (
        <View style={styles(theme).container}>
            <View>
                <Text style={styles(theme).heading}>
                    Descrição
                </Text>
                <ScrollView>
                    <Text style={styles(theme).description}>
                        {description ? description : 'Não há descrição para este serviço.'}
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
}