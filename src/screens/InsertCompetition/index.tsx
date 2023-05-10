import React, {useState} from 'react';

import { Container, Header, Title, Form, Fields, TextSoftware} from './styles';
import { 
    Modal
} from 'react-native';
import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'
import { Select } from '../../components/Forms/Select';
import { ModalEsportes } from '../ModalEsportes';
export function InsertCompetition(){
    const [esporteModal, setEsporteModal] = useState(false);
    
    const [esporte, setEsporte] = useState({
        nome: "Esporte *",
        aproved: false,
        Regras: ''       
    });

    function handleCloseSelectEsporte(){
        setEsporteModal(!esporteModal);
    }

    return (
        <Container>
            <Header>
                <Title>Inserir Competição</Title>   
            </Header>
            <Form>
                <Fields>
                    <Input 
                        placeholder='nome *'
                    />
                    <Input 
                        placeholder='Número de Participantes *'
                    />
                    <Select 
                        title={esporte.nome}
                        onPress={handleCloseSelectEsporte}  
                    />
                    <Input 
                        placeholder='Preço *'
                    />
                    <Input 
                        placeholder='Local *'
                    />
                </Fields>
                <Button title="Inserir Competição"/>
            </Form>
            <Modal visible={esporteModal}>
                <ModalEsportes 
                    esporte={esporte}
                    setEsporte={setEsporte}
                    closeSelectEsporte={handleCloseSelectEsporte}                
                />
            </Modal>  
        </Container>
    );
}