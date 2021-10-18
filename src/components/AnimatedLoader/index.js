import React from 'react';
import AnimatedLoader from "react-native-animated-loader";

import {
    Text,
  View
} from 'react-native';
import { styles } from './styles';

export function Loader({visible}){
  return (
    <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("../../assets/loading-repair-setting.json")}
        // source={require("../../assets/data-in-move.json")}
        animationStyle={styles.lottie}
        speed={2}
      >
        <Text>Carregando...</Text>
    </AnimatedLoader>
  );
}