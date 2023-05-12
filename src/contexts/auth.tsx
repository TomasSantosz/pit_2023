import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { 
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthProviderProps{
    children: ReactNode;
}

interface User{
    _id ?: string; 
    nome ?: string;
    email ?: string; 
    competicoes ?: object; 
    idade  ?: number; 
    altura ?: number; 
    genero ?: string;      
}

interface AuthContextData{
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(
        email: string, 
        password: string
        ): Promise<void>;
    signOut(): void;
    };
    
    
const AuthContext = createContext<AuthContextData>({signed: true} as AuthContextData);
export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@RNAuth:user');
            const storageToken = await AsyncStorage.getItem('@RNAuth:token');

            if(storageUser && storageToken){
                api.defaults.headers['Authorization'] = `Bearer ${storageToken}`
                setUser(JSON.parse(storageUser));
                setLoading(false)
            }
        }
        
        loadStorageData();
    },[])

    async function signIn(email:string, password:string){
        api.post('/auth/autentica',{
            email,
            password
        }).then(async(response) => {  
            console.log(user)          
            setUser(response.data.Atleta);
            await AsyncStorage.setItem(
                '@RNAuth:user', 
                JSON.stringify(response.data.Atleta)
            );
            await AsyncStorage.setItem(
                '@RNAuth:token', 
                JSON.stringify(response.data.token)
            );
            api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`
            return response.data.Atleta;
        }).catch(err => {
            const error = JSON.parse(err.request._response);
            //console.log(err.request.status)
            return Alert.alert(error.error);
        });    
    }

    async function signOut(){
        AsyncStorage.clear().then(()=>{
            setUser(null);            
        });
    }

    
    return (
        <AuthContext.Provider value={{signed: !!user, signIn, user, loading, signOut}}>
            {children}            
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)
    return context;
}