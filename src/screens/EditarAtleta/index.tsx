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
import {useAuth} from '../../contexts/auth';

export function EditarAtleta(){
    const navigation = useNavigation();
    const { signOut, user } = useAuth();
    const [genero, setGenero] = useState({
        key: user?.genero,
        name: user?.genero
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
            api.put(`/atleta/${user?._id}`,{
                nome,
                email,    
                idade,  
                altura,  
                genero: genero.key,        
            }).then(res => {
                console.log(res)
                return Alert.alert('Sucesso','Seus dados foram alterados com sucesso!');
            }).catch(err => {
                const error = JSON.parse(err.request._response);
                //console.log(err.request.status)
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
                <Title>Editar Perfil</Title>   
            </Header>            
            <ScrollView>            
            <Form>
                <Fields>
                    <Input 
                        placeholder='Nome *'
                        defaultValue={user?.nome}
                        onChangeText={(text)=>{
                            onChangeTextNome(text)
                        }}
                        autoCapitalize='words'
                        autoCorrect={false}  
                    />
                    <Input 
                        placeholder='Email *'
                        defaultValue={user?.email}
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
                        defaultValue={String(user?.idade)}
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
                        defaultValue={String(user?.altura)}
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