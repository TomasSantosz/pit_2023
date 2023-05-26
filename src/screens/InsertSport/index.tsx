import React, {useState} from 'react';
import { api } from '../../services/api';
import { Container, Header, Title, Form, Fields, UserWrapper, Content} from './styles';

import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'
import { useNavigation } from '@react-navigation/native';
import { 
    Alert,
    Keyboard,
    TouchableWithoutFeedback,
    StatusBar
} from 'react-native';
export function InsertSport(){
    const [nome, onChangeTextNome] = useState("");
    const [regras, onChangeTextRegras] = useState("");
    const navigation = useNavigation();

    function InserirEsporte(){
        if(!nome || !regras){
            return Alert.alert('Preencha os campos obrigatórios (*).');
        }

        api.post('/esportes',{
            nome,
            Regras: regras
        }).then(async(response) => {
            Alert.alert('Cadastrado com sucesso!', 'O esporte foi enviado para analise, favor aguardar confirmação', [
                {text: 'OK', onPress: () => navigation.navigate('Esportes')},
            ]);
            return response.data;
        }).catch(err => {
            return Alert.alert('Falha!', 'Falha ao cadastrar esporte, entre em contato com o administrador do app.');
        });
    }
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container style={{ backgroundColor:"#555"}}> 
            <StatusBar  barStyle={'light-content'} backgroundColor={"#555"}/>
                <Content>
                <Header>
                    <Title>Inserir Esporte</Title>
                </Header>
                <Form>
                    <Fields>
                        <Input 
                            placeholder='Nome *'
                            onChangeText={(text)=>{
                                onChangeTextNome(text)
                            }}
                            autoCapitalize='sentences'
                        />
                        <Input 
                            placeholder='Regras *'
                            multiline
                            numberOfLines={4}
                            onChangeText={(text)=>{
                                onChangeTextRegras(text)
                            }}
                            autoCapitalize='sentences'               
                        />
                    </Fields>
                    <Button title="Inserir Esporte" onPress={InserirEsporte}/>
                </Form>
                </Content>
            </Container>
        </TouchableWithoutFeedback>
    );
}