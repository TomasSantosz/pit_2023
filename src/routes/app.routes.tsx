import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator();

import { Dashboard } from '../screens/Dashboard';
import { InsertCompetition } from '../screens/InsertCompetition';
import { InsertSport } from '../screens/InsertSport';
import { Competicoes } from '../screens/Competicoes';
import { Perfil } from '../screens/Perfil';
import { Competicao } from '../screens/Competicao';
import { GeneroSelect } from '../screens/Genero'; 
import { Esportes } from "../screens/Esportes";

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
            <Screen
                name="Perfil"
                component={Perfil}
            />
            <Screen
                name="Competicoes"
                component={Competicoes}
            />
            <Screen
                name="Competicao"
                component={Competicao}                
                initialParams={{ _id: null }}
            />
            <Screen
                name="Esportes"
                component={Esportes}         
            />
            <Screen
                name="InserirEsportes"
                component={InsertSport}         
            />
        </Navigator>
    )
}