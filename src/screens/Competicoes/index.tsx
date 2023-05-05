import React, {useEffect, useState} from 'react';

import { Button } from '../../components/Forms/Button'
import { 
  Container,
  TypesCompetition,
  ContentCompetitions,
  NameCompetitions,
  SingleCompetitions,
  NameCompetition,
  TypeSport,
  DateCompetition,
  NumberOfMembers,
  MoreCompetition,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserName,
  NivelName,
  Content,
  Icon,
  IconStar
} from './styles';

import { api } from '../../services/api';

import { ScrollView } from 'react-native';

export function Competicoes(){
  const [competitions, setCompetitions] = useState([]);
  useEffect(() => {
    async function fetchCompeticoes() {
      const response = await api.get('/Competicoes')
      console.log(response.data);
    }
    fetchCompeticoes();
  },[])

    return(
        <Container>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                <User>
                  <UserName>Tomás Santos</UserName>
                  <NivelName>Nível 3</NivelName>
                </User>
              </UserInfo>
              <Icon name="power"/>
            </UserWrapper>            
          </Header>
          <Content>
            <ContentCompetitions>
              
              <NameCompetitions>Competições</NameCompetitions>
              <ScrollView>
              <SingleCompetitions>
                <TypesCompetition>
                  <NameCompetition>Tira tira do industrial</NameCompetition>
                  <MoreCompetition><IconStar name="Stars" /></MoreCompetition>
                </TypesCompetition>                
                <TypeSport>Futebol</TypeSport>                
                <TypesCompetition>      
                  <DateCompetition>Data: 18/05 </DateCompetition>
                  <NumberOfMembers>Participantes: 16/22</NumberOfMembers>                  
                </TypesCompetition>                
              </SingleCompetitions>
              
              </ScrollView>
            </ContentCompetitions>  
            
                     
          </Content>
          <Button title="Inserir Competição"/>
        </Container>
      );   
}
