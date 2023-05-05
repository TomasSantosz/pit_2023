import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';


import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';
import { InsertCompetition } from './src/screens/InsertCompetition';
import { InsertSport } from './src/screens/InsertSport';
import { Login } from './src/screens/Login';
import { Competicoes } from './src/screens/Competicoes';
import { Perfil } from './src/screens/Perfil';
import { Competicao } from './src/screens/Competicao';

SplashScreen.preventAutoHideAsync();
export default function App(){

  
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Competicoes />    
    </ThemeProvider>
  )
}
