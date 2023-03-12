import React from 'react';

import { Container, Header, Title, Form, Fields, TextSoftware} from './styles';

import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'


export function InsertCompetition(){
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
                        placeholder='Participantes *'
                    />
                    <Input 
                        placeholder='Esporte *'
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
        </Container>
    );
}