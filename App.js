import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Login from './components/Login';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Header from './components/Header';

const getFonts = () => Font.loadAsync({
  'ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
  'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Header />
  );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
