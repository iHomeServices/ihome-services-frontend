import React, { useEffect, useState } from 'react';

import {
  ActivityIndicator,
  Pressable,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FeatherIcon from 'react-native-vector-icons/Feather';
import { Categories } from '../../components/Categories';
import { Providers } from '../../components/Providers';
import { Image } from 'react-native-elements/dist/image/Image';
import default_avatar from '../../assets/default_avatar.png';

import { styles } from './styles';
import { useAuth } from '../../hooks/auth';
import backendAPI from '../../api/backend';
import { Loader } from '../../components/AnimatedLoader';
import { useTheme } from '../../hooks/theme';

export function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [providers, setProviders] = useState([]);

  const {user} = useAuth();
  const {theme} = useTheme();

  const base64 = `data:${user.avatar?.contentType};base64,${user.avatar?.image}`
  const avatar = user.avatar.contentType ? { uri: base64 } : default_avatar;

  const handleChangeCategory = (id) => {
    setCategoryId(id);
  }

  const handleProfileClick = () => {
    navigation.navigate('Profile');
  }  

  async function getCategories() {
    try {
      let response = await backendAPI.get('/category');
      const categoriesResponse = response.data || [];
      global.CATEGORIES = categoriesResponse;
      setCategories(categoriesResponse);
      handleChangeCategory(categoriesResponse[0]._id);
      if(!global.CATEGORIES.length) {
        Alert.alert('Erro', 'Não foi possível carregar os dados');
      }
    } catch (error) {
      console.log(`Couldn't get categories`, error.message);
    }
  }

  async function getProviders() {
    try {
      let response = await backendAPI.get('/provider');
      const providersResponse = response.data || [];
      global.PROVIDERS = providersResponse;
      setProviders(providersResponse);
    } catch (error) {
      console.log(`Couldn't get providers`, error.message);
    }
    
    setIsLoading(false);
  }

  async function getCustomers() {
    try {
      let response = await backendAPI.get('/customer');
      global.CUSTOMERS = response.data || [];
    } catch (error) {
      console.log(`Couldn't get customer`, error.message);
    }
  }

  useEffect(() => {
    getCategories();

    getProviders();

    getCustomers();
  }, []);

  return (
    <SafeAreaView style={styles(theme).container}>
      {/* <Loader visible={isLoading} /> */}

      <View style={styles(theme).header}>
        <View style={styles(theme).row}>
          <Image
            source={avatar}
            style={styles(theme).avatar}
            onPress={handleProfileClick}
            PlaceholderContent={<ActivityIndicator size="small" color="#fff" />} />
        </View>

        <View style={styles(theme).row}>
          <FeatherIcon
            style={styles(theme).pr10}
            size={23}
            color={theme.colors.dark}
            name={"bell"} />

          <Pressable 
            onPress={() => navigation.navigate('Settings')}
          >
            <FeatherIcon
              size={23}
              color={theme.colors.dark}
              name={"settings"} />
          </Pressable>
        </View>
      </View>

      <View style={styles(theme).categoriesContainer}>
        <Categories
          selectedCategory={categoryId}
          categories={categories}
          handleChangeCategory={handleChangeCategory} />
      </View>

      <View style={styles(theme).providerContainer}>
        <Providers
          categoryId={categoryId}
          providers={providers}
          navigation={navigation}
        />
      </View>

    </SafeAreaView>
  );
}