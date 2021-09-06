import React, { useState } from 'react';

import {
  Text,
  View
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Categories } from '../../components/Categories';
import { Providers } from '../../components/Providers';

import { SafeAreaView } from 'react-native-safe-area-context';

export function Home({ navigation }) {
  const [categoryId, setCategoryId] = useState('1');

  const handleChangeCategory = (id) => {
    setCategoryId(id);
  }

  return (
    <SafeAreaView>
      <Text h1>Olá José!</Text>
      <Text h3>Escolha a categoria e selecione o profissional</Text>
      <Categories handleChangeCategory={handleChangeCategory} />
      <Divider />
      <Providers
        categoryId={categoryId}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}