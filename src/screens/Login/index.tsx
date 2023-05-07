import React, { useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Modal, Platform, ScrollView,
    TouchableWithoutFeedback, Keyboard ,
    Alert
} from 'react-native';
import { 
    Container, Header, Title, 
    Form, Fields, TextSoftware, TextRegister} from './styles';

import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'
import { api } from '../../services/api';

export function Login(){
    const navigation = useNavigation();
    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    const [email, onChangeTextEmail] = useState("");
    const [password, onChangeTextPassword] = useState("");

    function openRegister(){
        navigation.navigate('Register')
    }

    function handleLogin(){
        if (!strongRegex.test(email)) {
            return Alert.alert('O Email não é válido.');
        }
        if(!password || !email){
            return Alert.alert('Preencha os campos obrigatórios (*).');
        }
        async function login(){
            api.post('/auth/autentica',{
                email,
                password
            }).then(response => {
                return navigation.navigate('Dashboard');
            }).catch(err => {
                const error = JSON.parse(err.request._response);
                //console.log(err.request.status)
                return Alert.alert(error.error);
            });           
        }
        login();
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={20}
        >
            <Header>
                <Title>Login</Title>   
            </Header>
            <ScrollView>
            <TextSoftware> Software de Competição esportiva </TextSoftware>
            <Form>
                <Fields>
                    <Input 
                        placeholder='email *'
                        onChangeText={(text)=>{
                            onChangeTextEmail(text)
                        }}
                        autoCapitalize='none'
                        autoCorrect={false}  
                    />
                    <Input 
                        placeholder='senha *'
                        onChangeText={(text)=>{
                            onChangeTextPassword(text)
                        }}
                        secureTextEntry={true}
                        autoCorrect={false}
                    />
                </Fields>
                <Button title="Login"
                    onPress={handleLogin}                
                />
                <TextRegister
                    onPress={openRegister} 
                >
                    Registar
                </TextRegister>
            </Form>
            </ScrollView>
        </Container>
        </TouchableWithoutFeedback>
    );
}