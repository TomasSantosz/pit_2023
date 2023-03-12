import React from 'react';

import { Container, Header, Title, Form, Fields, TextSoftware} from './styles';

import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'


export function InsertSport(){
    return (
        <Container>
            <Header>
                <Title>Inserir Esporte</Title>   
            </Header>
            <Form>
                <Fields>
                    <Input 
                        placeholder='nome *'
                        
                    />
                </Fields>
                <Button title="Inserir Esporte"/>
            </Form>
        </Container>
    );
}