import React, {useEffect, useState} from 'react';
import { api } from '../../services/api';
import moment from 'moment';
import { Button } from '../../components/Forms/Button';

import { View, ActivityIndicator, Alert} from 'react-native';
import { 
  Container,
  MoreCompetition,
  Icon,
  IconAccept,
  IconDecline,
  ContentParticipacao,
  NameCompetitions,
  SingleParticipantes,
  NameCompetition,
  Photo,
  Header,
  Accept,
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
  competicoes: [{
    _id: string;
    nome: string;
  }]
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
  const { signOut, user } = useAuth();
  
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

  async function HandleSair(){
    Alert.alert('Deletar', 'Deseja sair dessa competição?', [
      {text: 'Sim', onPress: () => {
        api.delete(`/competicoes/${competition._id}/atletas/${user?._id}`)
        .then(async(response) => {
            Alert.alert('Removido com sucesso!, Você saiu da competição');
            return response.data;
        }).catch(err => {
          console.log(err.request._response)
            return Alert.alert('Falha');
        });
      }},
      {text: 'Cancelar'}
    ]);    
  }

  async function HandleExcluirCompeticao(){    
    Alert.alert('Deseja deletar essa competição?', 'A competição será encerrada e todos sairão dela!', [
      {text: 'Sim', onPress: () => {
        api.delete(`/Competicoes/${competition._id}`)
        .then(async(response) => {
            Alert.alert('Removido com sucesso!, Você removeu a competição');
            return response.data;
        }).catch(err => {
          console.log(err.request._response)
            return Alert.alert('Falha');
        });
      }},
      {text: 'Cancelar'}
    ]);
  }

  function HandleCadastrar(){

    if(competition.atletas.length >= competition.NumPart){
      Alert.alert('Não permitido!', 'Campeonato lotado!');
    }

    api.post('/competicoes/atleta',{
      idCompeticao: competition._id, 
	    idAtleta: user?._id
    }).then(async(response) => {
        Alert.alert('Cadastrado com sucesso!', 'Você foi cadastrado no campeonato!');
        setPermiteButton(true);
        return response.data;
    }).catch(err => {
        return Alert.alert('Error!', 'Não foi possível entrar na competição!');
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
                    {e._id === competition.criador 
                      ? (<Icon name="stars" />) 
                      : 
                      (<Accept>
                        <IconAccept onPress={()=>{Alert.alert('Aceito')}} name="plus-circle" />
                        <IconDecline onPress={()=>{Alert.alert('removido')}} name="minus-circle" />
                      </Accept>)}
                  </MoreCompetition>                                     
                </SingleParticipantes>
              )
            })}            
          </ScrollView>
        </ContentParticipacao>
        {permiteButton ? 
          user?._id === competition.criador ? (
            <Button  onPress={()=>{
              HandleExcluirCompeticao();
            }} title="Excluir Competição"/>
          ): (
            <Button  onPress={()=>{
              HandleSair();
            }} title="Sair"/>
          )
        :
        <Button onPress={()=>{
          HandleCadastrar();
        }} title="Participar"/>
      }                             
      </Content>
    </Container>
  );   
}
