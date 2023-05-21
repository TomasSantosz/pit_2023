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

    const [generoModal, setGeneroModal] = useState(user?.genero);
    const [nome, onChangeTextNome] = useState(user?.nome);
    const [email, onChangeTextEmail] = useState(user?.email);
    const [idade, onChangeTextIdade] = useState(user?.idade);
    const [altura, onChangeTextAltura] = useState(user?.altura);

    async function handleRegister(){
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
       
        async function register(){
            api.put(`/atleta/${user?._id}`,{
                nome,
                email,   
                genero: genero.key,        
            }).then(res => {
                Alert.alert('Sucesso','Seus dados foram alterados com sucesso! Você será redirecionado para tela de login', [
                    {text: 'Sair', onPress: () => signOut()},
                    {text: 'Cancelar'},
                  ]);
                return signOut();
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
                    {/* <Input 
                        placeholder='Email *'
                        defaultValue={user?.email}
                        editable={false}
                        onChangeText={(text)=>{
                            onChangeTextEmail(text)
                        }}
                        autoCapitalize='none'
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
                    /> */}
                    <Select 
                        title={genero.name}
                        onPress={handleCloseSelectGenero}  
                    />
                </Fields>
                <Button 
                    title="Editar dados"
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