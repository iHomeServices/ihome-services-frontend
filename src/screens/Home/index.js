import React, { useState } from 'react';

import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import  MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import  FeatherIcon from 'react-native-vector-icons/Feather';
import { Categories } from '../../components/Categories';
import { Providers } from '../../components/Providers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native-elements/dist/image/Image';

import { styles } from './styles';

export function Home({ navigation }) {
  const [categoryId, setCategoryId] = useState('1');

  const handleChangeCategory = (id) => {
    setCategoryId(id);
  }

  return (
    <SafeAreaView 
    style={styles.container}
    >

      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://github.com/FelipeSD.png' }}  
          style={styles.profilePhoto}
          PlaceholderContent={<ActivityIndicator />}/>
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

      <View style={styles.greetings}>
        <Text style={styles.text1}>
          Olá José!
        </Text>
        <Text style={styles.text2}>
          Comece a cuidar de sua casa
        </Text>
      </View>

      <Categories 
        style={styles.categoriesContainer}
        handleChangeCategory={handleChangeCategory} />

      <View 
      // style={styles.flex}
      >
        <Providers
          categoryId={categoryId}
          navigation={navigation}
        />
      </View>

    </SafeAreaView>
  );
}