import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator();

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Dashboard } from '../screens/Dashboard';
/* import { InsertCompetition } from '../screens/InsertCompetition';
import { InsertSport } from '../screens/InsertSport';
import { Competicoes } from '../screens/Competicoes';
import { Perfil } from '../screens/Perfil';
import { Competicao } from '../screens/Competicao';
import { GeneroSelect } from '../screens/Genero'; */

export function AppRoutes(){
    return(
        <Navigator
            initialRouteName="Dashboard" 
            screenOptions={{
            headerShown: false,
            }}
        >            
            <Screen
                name="Dashboard"
                component={Dashboard}
            />
        </Navigator>
    )
}