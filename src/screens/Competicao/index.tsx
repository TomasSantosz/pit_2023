import React, {useEffect, useState} from 'react';
import { api } from '../../services/api';
import moment from 'moment';
import { Button } from '../../components/Forms/Button';

import { View, ActivityIndicator, Alert} from 'react-native';
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
import { ImagemPerfil } from '../../assets/alfabeto';
import { useAuth } from '../../contexts/auth';

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
  atletas: any;
  DataInicio?:string;
  DataTermino?: string;
  NumPart?: number;
  Local?: string;

}

export function Competicao({ route }:Route){
  const [loading, setLoading] = useState(true);
  const [competition, setCompetition] = useState<Item | any>(null);
  const [permiteButton, setPermiteButton] = useState({});
  const {signOut, user} = useAuth();
  
  useEffect(()=>{
    async function getCompetition() {      
      const response = await api.get(`/Competicoes/${route.params._id}`);
      setCompetition(response.data);
      function participa(p: any) {
        return p._id === user?._id;
      }
      setPermiteButton(!!response.data.atletas.find(participa))
      setLoading(false);        
    }
    getCompetition();    
  },[]);

  useEffect(()=>{
    
    console.log(permiteButton)
  },[permiteButton])
  function HandleCadastrado(){
    Alert.alert('Falha!', 'Você já está cadastrado!');
  }

  function HandleCadastrar(){

    if(competition.atletas.length >= competition.NumPart){
      Alert.alert('Não permitido!', 'Campeonato lotado!');
    }
    api.post('/competicoes/atleta',{
      idCompeticao: competition._id, 
	    idAtleta: user?._id
    })
    .then(async(response) => {
        Alert.alert('Cadastrado com sucesso!', 'Você foi cadastrado no campeonato!');
        setPermiteButton(true);
        return response.data;
    }).catch(err => {
        const error = JSON.parse(err.request._response);
        console.log(error.message)
        return Alert.alert(error.message);
    });
  }
  if(loading){
    return (
      <View style={{flex: 1, backgroundColor: '#EBEBEB',justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color="#555"/>
      </View>
    )
  }
  

  return competition._id === route.params._id && (
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
          <NameCompetitions>Participantes {competition.atletas.length}/{competition.NumPart}</NameCompetitions>
          <ScrollView>          
            {competition.atletas.map((e:any)=>{
              return (
                <SingleParticipantes key={e._id}>
                  <Photo source={ImagemPerfil(e.nome.substring(0,1).toUpperCase())}/>
                  <NameCompetition>{e.nome}</NameCompetition> 
                  <MoreCompetition>
                    {e._id === competition.criador && (<Icon name="stars" />)}
                  </MoreCompetition>                                     
                </SingleParticipantes>
              )
            })}            
          </ScrollView>
        </ContentParticipacao>
        {permiteButton ? 
          <Button  onPress={()=>{
            HandleCadastrado();
          }} title="Participar"/>
        :
        <Button onPress={()=>{
          HandleCadastrar();
        }} title="Participar"/>
      }                             
      </Content>
    </Container>
  );   
}
