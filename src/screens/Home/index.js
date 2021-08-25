import React from 'react';

import {
    Text,
  View
} from 'react-native';
import { Categories } from '../../components/Categories';
import { Providers } from '../../components/Providers';

import { styles } from './styles';

export function Home(){
  return (
    <View>
        <Text>Home page</Text>
        <Categories />
        <Providers />
    </View>
  );
}