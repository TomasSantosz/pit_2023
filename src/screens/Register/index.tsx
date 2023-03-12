import React from 'react';

import { Container, Header, Title, Form, Fields, TextSoftware} from './styles';

import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'


export function Register(){
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>   
            </Header>
            <TextSoftware> Software de Competição esportiva </TextSoftware>
            <Form>
                <Fields>
                    <Input 
                        placeholder='nome *'
                    />
                    <Input 
                        placeholder='email *'
                    />
                    <Input 
                        placeholder='senha *'
                    />
                    <Input 
                        placeholder='confirmar senha *'
                    />
                </Fields>
                <Button title="Cadastrar"/>
            </Form>
        </Container>
    );
}