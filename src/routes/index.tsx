import { NavigationContainer} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { AppRoutes } from './app.routes';
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins';
import React, { useCallback, useEffect } from "react";
export default function Routes(){

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
        <NavigationContainer onReady={onLayoutRootView}>
            <AppRoutes />
        </NavigationContainer>
    )
}