import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Button } from '../../components/Forms/Button'


import { 
  Container,
  TypesCompetition,
  ContentCompetitions,
  NameCompetitions,
  SingleCompetitions,
  NameCompetition,
  MoreCompetition,
  TypeSport,
  Header,
  UserWrapper,
  SportInfo,
  Photo,
  User,
  SportName,
  NivelName,
  Content,
  Icon,
  IconStar
} from './styles';
import { api } from '../../services/api';
import { ScrollView } from 'react-native';

interface Item {
  _id: string;
  nome: string;
  Regras: string;
  aproved: boolean;
}

export function Esportes(){
  const navigation = useNavigation();
  
  const [esportes, setEsportes] = useState([]);

  useEffect(() => {
    async function fetchEsportes() {
      const response = await api.get('/Esportes');
      setEsportes(response.data);
    }
    fetchEsportes();
  },[]);

  function openInsertSport(){
    navigation.navigate('InserirEsportes');
  }  

  function openCompetitionWithSport(nome:string){
    navigation.navigate('CompeticoesEsportes', { 
      nome 
    });
  }
  
  return(    
    <Container>
      <Header>
        <UserWrapper>
          <SportInfo>
            <SportName>Esportes</SportName>
          </SportInfo>
        </UserWrapper>            
      </Header>
      <Content>
        <ContentCompetitions>              
          <NameCompetitions>Esportes Disponíveis</NameCompetitions>
          <ScrollView>
            {esportes.map((item:Item, index)=>{
              return item.aproved === false && (
                <SingleCompetitions key={item._id} onPress={()=>openCompetitionWithSport(item.nome)}>
                  <TypesCompetition>
                    <NameCompetition>{item.nome}</NameCompetition>
                  </TypesCompetition>                            
                </SingleCompetitions>
              )              
            })}             
          </ScrollView>
        </ContentCompetitions>      
      <Button title="Inserir Esporte" onPress={openInsertSport} />
      </Content>
    </Container>
  );   
}
