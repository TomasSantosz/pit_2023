import React from "react";
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

import { View, ActivityIndicator} from 'react-native';
import { useAuth } from '../contexts/auth';

export default function Routes(){
    const { signed, loading } = useAuth();
    /* if(loading){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={'large'} color="#c4c4c4"/>
            </View>
        )
    } */
    return signed  ? <AppRoutes />  : <AuthRoutes />
}