import React from 'react';

import {
    Text,
  View
} from 'react-native';
import { Categories } from '../../components/Categories';

import { styles } from './styles';

export function Home(){
  return (
    <View>
        <Text>Home page</Text>
        <Categories />
    </View>
  );
}