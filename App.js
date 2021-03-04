import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts, Padauk_400Regular } from '@expo-google-fonts/padauk';
import { AppLoading } from 'expo';
import Routes from './src/router';


export default function App() {

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );
}

