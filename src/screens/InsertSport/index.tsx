import React, {useState} from 'react';
import { api } from '../../services/api';
import { Container, Header, Title, Form, Fields, TextSoftware} from './styles';

import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'
import { useNavigation } from '@react-navigation/native';
import { 
    Alert
} from 'react-native';
export function InsertSport(){
    const [nome, onChangeTextNome] = useState("");
    const [Regras, onChangeTextRegras] = useState("");
    const navigation = useNavigation();
    function InserirEsporte(){
        api.post('/esportes',{
            nome,
            Regras
        }).then(async(response) => {
            console.log(response.data);
            Alert.alert('Sucesso', 'Cadastrado com sucesso!', [
                {text: 'OK', onPress: () => navigation.navigate('Esportes')},
            ]);
            return response.data;
        }).catch(err => {
            const error = JSON.parse(err.request._response);
            //console.log(err.request.status)
            return Alert.alert(error.error);
        });
    }
    
    return (
        <Container>
            <Header>
                <Title>Inserir Esporte</Title>   
            </Header>
            <Form>
                <Fields>
                    <Input 
                        placeholder='nome *'
                        onChangeText={(text)=>{
                            onChangeTextNome(text)
                        }}
                        autoCapitalize='none'
                    />
                    <Input 
                        placeholder='Regras *'
                        onChangeText={(text)=>{
                            onChangeTextRegras(text)
                        }}
                        autoCapitalize='none'               
                    />
                </Fields>
                <Button title="Inserir Esporte" onPress={InserirEsporte}/>
            </Form>
        </Container>
    );
}