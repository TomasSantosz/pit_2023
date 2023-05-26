import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Platform, ScrollView,
    TouchableWithoutFeedback, Keyboard ,
    Alert,StatusBar
} from 'react-native';

import { 
    Container, Header, Title, 
    Form, Fields, TextSoftware, TextRegister, Content} from './styles';

import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'
import { useAuth } from '../../contexts/auth';

export function Login(){
    const { signIn  } = useAuth();
    const navigation = useNavigation();
    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    const [email, onChangeTextEmail] = useState("");
    const [password, onChangeTextPassword] = useState("");
    

    function openRegister(){
        navigation.navigate('Register')
    }

    function handleLogin(){
        if(!password || !email){
            return Alert.alert('Preencha os campos obrigatórios (*).');
        }

        if (!strongRegex.test(email)) {
            return Alert.alert('O Email não é válido.');
        }
        
        signIn(email,password)
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container
            style={{ backgroundColor:"#555"}}
            >
            <StatusBar  barStyle={"light-content"} backgroundColor={"#555"}/>
            <Content
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={30}>
                <Header>
                    <Title>Login</Title>   
                </Header>
                <Form>
                    <TextSoftware> Software de Competição esportiva </TextSoftware>
                    <Fields>
                        <Input 
                            placeholder='E-mail *'
                            onChangeText={(text)=>{
                                onChangeTextEmail(text)
                            }}
                            autoCapitalize='none'
                            autoCorrect={false}  
                        />
                        <Input 
                            placeholder='Senha *'
                            onChangeText={(text)=>{
                                onChangeTextPassword(text)
                            }}
                            secureTextEntry={true}
                            autoCorrect={false}
                        />
                        <Button title="Login"
                            onPress={handleLogin}                
                        />
                    
                        <TextRegister
                            onPress={openRegister} 
                        >Registar</TextRegister>
                    </Fields>                    
                </Form>
            </Content>
        </Container>
        </TouchableWithoutFeedback>
    );
}