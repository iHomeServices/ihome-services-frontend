import React, { useEffect, useState } from 'react';

import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FeatherIcon from 'react-native-vector-icons/Feather';
import { Categories } from '../../components/Categories';
import { Providers } from '../../components/Providers';
import { Image } from 'react-native-elements/dist/image/Image';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import backendAPI from '../../api/backend';

export function Home({ route, navigation }) {
  const [categoryId, setCategoryId] = useState('');
  const [providers, setProviders] = useState([]);
  const [categories, setCategories] = useState([]);
  let userId;
  // const userId = route.params.userId;

  const handleChangeCategory = (id) => {
    setCategoryId(id);
  }

  const handleProfileClick = () => {
    navigation.navigate('Profile', {
      userId: userId
    });
  }

  async function getCategories() {
    try {
      let response = await backendAPI.get('/category');
      setCategories(response.data);
      setCategoryId(categories._id);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProviders() {
    try {
      let response = await backendAPI.get('provider');
      setProviders(response.data);
      userId = providers[0]._id;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();

    getProviders();
  }, []);

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
            size={23}
            color={theme.colors.dark}
            name={"bell"} />
          <FeatherIcon
            size={23}
            color={theme.colors.dark}
            name={"settings"} />
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <Categories
          categories={categories}
          handleChangeCategory={handleChangeCategory} />
      </View>

      <View style={styles.providerContainer}>
        <Providers
          categoryId={categoryId}
          providers={providers}
          navigation={navigation}
        />
      </View>

    </SafeAreaView>
  );
}