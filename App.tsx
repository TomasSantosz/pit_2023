import React, { useCallback, useEffect, useContext } from "react";
import { ThemeProvider } from 'styled-components';
import { NavigationContainer} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes';
import { AuthProvider } from "./src/contexts/auth";
import AuthContext from "./src/contexts/auth";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import theme from './src/global/styles/theme';

export default function App(){
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  
useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer onReady={onLayoutRootView}>  
        <AuthProvider>
          <Routes />   
        </AuthProvider>      
      </NavigationContainer>
    </ThemeProvider> 
  )
}
