import React from 'react';

import {Picker} from '@react-native-picker/picker';

import {styles} from './styles';
import { Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { useTheme } from '../../hooks/theme';

export function PickerField({items, label, ...rest}) {
    const {theme} = useTheme()

    return (
        <View>
            <Text style={styles(theme).label}>{label}</Text>
            <View style={styles(theme).container}>
                <Picker 
                    style={{color: theme.colors.text}}
                    {...rest} 
                >
                    {items.map((item, index) => (
                        <Picker.Item key={item._id || index} 
                            label={item.name || item} 
                            value={item._id || item} 
                        />
                    ))}
                </Picker>
            </View>
        </View>
    );
}