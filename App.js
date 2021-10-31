import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Rubik_300Light, Rubik_400Regular, Rubik_500Medium } from '@expo-google-fonts/rubik';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import {AuthProvider} from './src/hooks/auth';
import { Routes } from './src/routes';

export default function App() {
  // carregamento de fontes
  const [fontsLoaded] = useFonts(
    { Rubik_300Light, Rubik_400Regular, Rubik_500Medium }
  );

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </AuthProvider>
  )
}