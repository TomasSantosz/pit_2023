import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';
import { 
    Alert
} from 'react-native';

interface AuthProviderProps{
    children: ReactNode;
}

interface AuthContextData{
    signed: boolean;
    user: object | null;
    signIn(
        email: string, 
        password: string
        ): Promise<void>;
    signOut(): void;
    };
    
    
const AuthContext = createContext<AuthContextData>({signed: true} as AuthContextData);
export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<object | null>(null);

    async function signIn(email:string, password:string){
        api.post('/auth/autentica',{
            email,
            password
        }).then(response => {            
            setUser(response.data)
            return response.data;
        }).catch(err => {
            const error = JSON.parse(err.request._response);
            //console.log(err.request.status)
            return Alert.alert(error.error);
        });    
    }

    async function signOut(){
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{signed: !!user, signIn, user, signOut}}>
            {children}            
        </AuthContext.Provider>
    )
}

export default AuthContext;