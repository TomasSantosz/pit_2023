import React, {useEffect, useState} from 'react';
import { api } from '../../services/api';
import moment from 'moment';
import { Button } from '../../components/Forms/Button';

import { View, ActivityIndicator} from 'react-native';
import { 
  Container,
  MoreCompetition,
  Icon,
  ContentParticipacao,
  NameCompetitions,
  SingleParticipantes,
  NameCompetition,
  Photo,
  Header,
  InfoCompetition,
  SubTitles,
  Title,
  Content,
} from './styles';
import { ScrollView } from 'react-native';
interface Route{
  route:{
    params: {
      _id: string;
    };
  }

}

interface Item {
  _id?: string;
  nome: string;
  esporte?: {
    nome: string;
    Regras: string;
  }
  DataInicio?:string;
  DataTermino?: string;
  NumPart?: number;
  Local?: string;

}

export function Competicao({ route }:Route){
  const [loading, setLoading] = useState(true);
  const [competition, setCompetition] = useState<Item>({
    _id: '',
    nome: '',
    esporte: {
      nome: '',
      Regras: '',
    },
    DataInicio:'',
    DataTermino: '',
    NumPart: 0,
    Local: '',
  });

  useEffect(()=>{
      async function getCompetition() {
        const competition = await api.get(`/Competicoes/${route.params._id}`);
        setCompetition(competition.data);
        setLoading(false);        
      }
      getCompetition();
  },[])
    
    if(loading){
      return (
          <View style={{flex: 1, backgroundColor: '#EBEBEB',justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size={'large'} color="#555"/>
          </View>
      )
    }
    return(
        <Container>
          <Header>
            <InfoCompetition>
                  <Title>{competition.nome}</Title>
                  <SubTitles>Data: {moment(competition.DataInicio).format("DD/MM/YYYY")}</SubTitles>
                  <SubTitles>Local: {competition.Local}</SubTitles>
            </InfoCompetition>            
          </Header>
          <Content>
            <ContentParticipacao>
              
              <NameCompetitions>Participantes  9/{competition.NumPart}</NameCompetitions>
              <ScrollView>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition><Icon name="stars" /></MoreCompetition>             
                </SingleParticipantes>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition></MoreCompetition>             
                </SingleParticipantes>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition></MoreCompetition>             
                </SingleParticipantes>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition></MoreCompetition>             
                </SingleParticipantes>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition></MoreCompetition>             
                </SingleParticipantes>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition></MoreCompetition>             
                </SingleParticipantes>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition></MoreCompetition>             
                </SingleParticipantes>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition></MoreCompetition>             
                </SingleParticipantes>
              </ScrollView>
            </ContentParticipacao>  
            <Button title="Participar"/>                     
          </Content>
        </Container>
      );   
}
