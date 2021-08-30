import React from 'react';

import {
  Text,
  View
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Categories } from '../../components/Categories';
import { Providers } from '../../components/Providers';

import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

export function Home(){
  return (
    <SafeAreaView>
      <Text h1>Olá José!</Text>
      <Text h3>Escolha a categoria e selecione o profissional</Text>
      <Categories />
      <Divider />
      <Providers />
    </SafeAreaView>
  );
}