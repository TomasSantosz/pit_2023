import React from 'react';

import { Container, Header, Title, Form, Fields, TextSoftware} from './styles';

import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'


export function Login(){
    return (
        <Container>
            <Header>
                <Title>Login</Title>   
            </Header>
            <TextSoftware> Software de Competição esportiva </TextSoftware>
            <Form>
                <Fields>
                    <Input 
                        placeholder='email *'
                    />
                    <Input 
                        placeholder='senha *'
                    />
                </Fields>
                <Button title="Login"/>
            </Form>
        </Container>
    );
}