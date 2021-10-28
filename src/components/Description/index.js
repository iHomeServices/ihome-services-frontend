import React from 'react';

import {ScrollView, Text, View} from 'react-native';

import {styles} from './styles';

export function Description({description}) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>
                    Descrição
                </Text>
                <ScrollView>
                    <Text style={styles.description}>
                        {description ? description : 'Não há descrição para este serviço.'}
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
}