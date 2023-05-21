import React, { useState } from 'react';
import { 
    Modal, Platform, ScrollView,
    TouchableWithoutFeedback, Keyboard ,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Title, Form, Fields, TextSoftware} from './styles';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { Select } from '../../components/Forms/Select';
import { api } from '../../services/api';

import { GeneroSelect } from '../Genero';

export function Register(){
    const navigation = useNavigation();
    const [genero, setGenero] = useState({
        key: "genero",
        name: "Gênero *"
    });

    function openRegister(){
        navigation.navigate('Login')
    }
    const [generoModal, setGeneroModal] = useState(false);
    const [nome, onChangeTextNome] = useState("");
    const [password, onChangeTextSenha] = useState("");
    const [email, onChangeTextEmail] = useState("");
    const [idade, onChangeTextIdade] = useState(0);
    const [altura, onChangeTextAltura] = useState(0);
    
    const [confirmarSenha, onChangeTextConfirmarSenha] = useState(""); 
    async function handleRegister(){
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if(!nome || !password || !email){
            return Alert.alert('Preencha os campos obrigatórios (*).');
        }
        if(genero.key === "genero"){
            return Alert.alert('Selecione o campo: Gênero.');
        }
        if(idade < 18){
            return Alert.alert('O campo idade deve ser acima de 18 anos.');
        }
        if(confirmarSenha !== password){
            return Alert.alert('o campo senha e confirmar senha não possuem o mesmo valor! .');
        }
        if (!strongRegex.test(email)) {
            return Alert.alert('O Email não é válido.');
        }

        if(altura < 54.6 || altura > 246.5){
            return Alert.alert('Altura inválida. Resgistre-se no Guiness Book');
        }
        async function register(){
            api.post('/auth/registro',{nome,
                email,    
                idade,  
                altura,  
                genero: genero.key,         
                password}).then(res => {
                return Alert.alert('Cadastrado com sucesso!', 'Você foi cadastrado na plataforma', [
                    {text: 'OK', onPress: () => navigation.navigate('Login')},
                ]);
            }).catch(err => {
                const error = JSON.parse(err.request._response);
                return Alert.alert(error.error);
            }); 
        }
        register(); 
    }

    function handleCloseSelectGenero(){
        setGeneroModal(!generoModal);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container 
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={20}
            >            
            <Header>
                <Title>Cadastro</Title>   
            </Header>            
            <TextSoftware> Software de Competição esportiva </TextSoftware>
            
            <ScrollView>            
            <Form>
                <Fields>
                    <Input 
                        placeholder='Nome *'
                        onChangeText={(text)=>{
                            onChangeTextNome(text)
                        }}
                        autoCapitalize='words'
                        autoCorrect={false}  
                    />
                    <Input 
                        placeholder='Email *'
                        onChangeText={(text)=>{
                            onChangeTextEmail(text)
                        }}
                        autoCapitalize='none'
                        autoCorrect={false}                        
                    />
                    <Input 
                        placeholder='Senha *'
                        onChangeText={(text)=>{
                            onChangeTextSenha(text)
                        }}
                        secureTextEntry={true}
                        autoCorrect={false} 
                    />
                    <Input 
                        placeholder='Confirmar senha *'
                        onChangeText={(text)=>{
                            onChangeTextConfirmarSenha(text)
                        }}

                        secureTextEntry={true}
                        autoCorrect={false} 
                    />
                    <Input 
                        placeholder='Idade *'
                        keyboardType='numeric'
                        autoCorrect={false}  
                        onChangeText={(text)=>{
                            const textNumber = Number(text)
                            onChangeTextIdade(textNumber)
                        }}
                    />
                    <Input 
                        placeholder='Altura cm *'
                        keyboardType='numeric'
                        autoCorrect={false}  
                        onChangeText={(text)=>{
                            const textNumber = Number(text)
                            onChangeTextAltura(textNumber)
                        }}
                    />
                    <Select 
                        title={genero.name}
                        onPress={handleCloseSelectGenero}  
                    />
                    
                </Fields>
                <Button 
                        title="Cadastrar"
                        onPress={handleRegister} 
                    />
            </Form>
            
            
            <Modal visible={generoModal}>
                <GeneroSelect 
                    genero={genero}
                    setGenero={setGenero}
                    closeSelectGenero={handleCloseSelectGenero}                
                />
            </Modal>  
            </ScrollView>      
        </Container>
        </TouchableWithoutFeedback>  
    );
}