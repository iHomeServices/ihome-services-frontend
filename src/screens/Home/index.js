import React, { useState } from 'react';

import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import { Categories } from '../../components/Categories';
import { Providers } from '../../components/Providers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native-elements/dist/image/Image';
import { DATA } from '../../components/Providers';

import { styles } from './styles';

export function Home({ route, navigation }) {
  const [categoryId, setCategoryId] = useState('1');
  const userId = route.params.userId;

  const handleChangeCategory = (id) => {
    setCategoryId(id);
  }

  const handleProfileClick = () => {
    navigation.navigate('Profile', {
      userId: userId
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Image
            source={{ uri: 'https://github.com/FelipeSD.png' }}
            style={styles.avatar}
            onPress={handleProfileClick}
            PlaceholderContent={<ActivityIndicator />} />
        </View>

        <View style={styles.row}>
          <FeatherIcon
            style={styles.pr10}
            size={22}
            name={"bell"} />
          <FeatherIcon
            size={22}
            name={"settings"} />
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <Categories
          handleChangeCategory={handleChangeCategory} />
      </View>

      <View style={styles.providerContainer}>
        <Providers
          categoryId={categoryId}
          navigation={navigation}
        />
      </View>

    </SafeAreaView>
  );
}