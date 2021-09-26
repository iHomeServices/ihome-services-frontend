import React from 'react';

import {ScrollView, Text, View} from 'react-native';

import {styles} from './styles';

export function Description() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>
                    Descrição
                </Text>
                <ScrollView>
                    <Text style={styles.description}>
                        Formado no curso técnico de Elétrica no SENAI;
                        {`\n`}
                        Experiência de 2 anos;
                        {`\n`}
                        Participação no seminário IEEE ESW Brasil 2018 - Electrical Safety Workshop Brasil 
                        do Instituto dos Engenheiros Eletricistas e Eletrônicos.
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
}