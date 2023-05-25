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
  DivSubTitles,
  IconWait,
  IconSettings,
  InfoCompetition,
  SubTitles,
  Icons,
  Title,
  Content,
} from './styles';
import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { ScrollView, StatusBar } from 'react-native';
import { ImagemPerfil } from '../../assets/alfabeto';
import { useAuth } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';

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
  atletasArray: any;
  DataInicio?:string;
  DataTermino?: string;
  NumPart?: number;
  Local?: string;

}

export function Competicao({ route }:Route){
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [competition, setCompetition] = useState<Item | any>(null);
  const [permiteButton, setPermiteButton] = useState({});
  const [aprovados, setAprovados] = useState(0);
  const { signOut, user } = useAuth();
  
  useEffect(()=>{
    async function getCompetition() { 
      const response = await api.get(`/competicoes/${route.params._id}`);   
      setCompetition(response.data);
      let numeroAprovados = []
      response.data.atletasArray.forEach((res:any)=>{
        if(res.aprovado === true){
          numeroAprovados.push(res)
        }
      })
      setAprovados(numeroAprovados.length)
      function participa(p: any) {
        return p.atleta._id === user?._id;
      }
      setPermiteButton(!!response.data.atletasArray.find(participa))
      setTimeout(function(){
        setLoading(false); 
      },100);
      
    }
    getCompetition();   
  },[competition]);

  async function HandleAproved(idRecused: string){
      
    api.put(`/competicoes/${competition._id}/atletas/${idRecused}`)
    .then(async(response) => {
        Alert.alert('Aprovado com sucesso!', 'Usuário foi aprovado na competição');
        return response.data;
    }).catch(err => {
        return Alert.alert('Falha');
    });
}
  async function HandleRecused(idRecused: string){
      
        api.delete(`/competicoes/${competition._id}/atletas/${idRecused}`)
        .then(async(response) => {
            Alert.alert('Recusado com sucesso!', 'Usuário foi recusado da competição');
            return response.data;
        }).catch(err => {
            return Alert.alert('Falha');
        });
  }
  async function HandleSair(){
    Alert.alert('Deletar', 'Deseja sair dessa competição?', [
      {text: 'Sim', onPress: () => {
        api.delete(`/competicoes/${competition._id}/atletas/${user?._id}`)
        .then(async(response) => {
            Alert.alert('Removido com sucesso!', 'Você saiu da competição');
            return response.data;
        }).catch(err => {
            return Alert.alert('Falha');
        });
      }},
      {text: 'Cancelar'}
    ]);    
  }

  function openCompetition(){
    navigation.navigate('Competicoes');
  }

  async function HandleExcluirCompeticao(){    
    await Alert.alert('Deseja deletar essa competição?', 'A competição será encerrada e todos sairão dela!', [
      {text: 'Sim', onPress: async() => {
        await api.delete(`/Competicoes/${competition._id}`)
        .then(async(response) => {
          Alert.alert('Removido com sucesso!', 'Você removeu a competição', [
              {text: 'ok', onPress: () => openCompetition()},
              {text: 'Cancelar'},
          ]);
        }).catch(err => {
            return Alert.alert('Falha');
        });
      }},
      {text: 'Cancelar'}
    ]);
  }

  function openEditCompetition(_id:string){
    navigation.navigate('InserirCompeticoes', { 
      _id
    });
  }

  function HandleCadastrar(){

    if(competition.atletasArray.length >= competition.NumPart){
      Alert.alert('Não permitido!', 'Campeonato lotado!');
    }

    api.post('/competicoes/atleta',{
      idCompeticao: competition._id, 
	    atletasArray:{
        atleta: user?._id
      }
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
        <Lottie source={require('../../assets/lottie/70493-loading-spinner.json')} autoPlay loop />
      </View>
    )
  } 

  return competition._id === route.params._id && (
    <Container style={{marginTop: StatusBar.currentHeight}}>
      <Content>
      <Header>
        <InfoCompetition>
            
            <Title>{competition.nome}     {user?._id === competition.criador && (<IconSettings name="square-edit-outline" onPress={()=>{openEditCompetition(competition._id)}}/> )} </Title>
            <DivSubTitles>
              <Icons name="calendar-range" />
              <SubTitles>{moment(competition.DataInicio).format("DD/MM/YYYY") }</SubTitles> 
              <Icons name="clock-time-four-outline" /> 
              <SubTitles>{competition.DataInicio.split('T')[1].substring(0,5)}</SubTitles>              
            </DivSubTitles>
            <DivSubTitles>
              <Icons name="map-marker-radius-outline" />
              <SubTitles>{competition.Endereco.rua}, {competition.Endereco.numero} - {competition.Endereco.bairro}, {competition.Endereco.cidade}</SubTitles>
            </DivSubTitles>
        </InfoCompetition>                   
      </Header>
      <ContentParticipacao>          
        <NameCompetitions>Participantes {aprovados}/{competition.NumPart}</NameCompetitions>
        {user?._id === competition.criador ? (
          <ScrollView>          
            {competition.atletasArray.map((e:any)=>{
              return (
                <SingleParticipantes key={e._id}>
                  <Photo source={ImagemPerfil(e.atleta.nome.substring(0,1).toUpperCase())}/>
                  <NameCompetition>{e.atleta.nome}</NameCompetition> 
                  <MoreCompetition>
                    {e.atleta._id === competition.criador 
                      ? (<Icon name="crown-circle-outline" />) 
                      : user?._id === competition.criador && e.aprovado === false ? 
                      (<Accept>
                        <IconAccept onPress={()=>{HandleAproved(e.atleta._id)}} name="check-bold" />
                        <IconDecline onPress={()=>{HandleRecused(e.atleta._id)}} name="close-thick" />
                      </Accept>) : 
                      (<IconDecline onPress={()=>{HandleRecused(e.atleta._id)}} name="close-thick" />)
                    }
                  </MoreCompetition>                                     
                </SingleParticipantes>
              )
            })}            
          </ScrollView>
        ):
        (
          <ScrollView>          
            {competition.atletasArray.map((e:any)=>{
              return e.aprovado ? (
                <SingleParticipantes key={e._id}>
                  <Photo source={ImagemPerfil(e.atleta.nome.substring(0,1).toUpperCase())}/>
                  <NameCompetition>{e.atleta.nome}</NameCompetition> 
                  <MoreCompetition>  
                    {e.atleta._id === competition.criador && (<Icon name="crown-circle-outline" />)}                    
                  </MoreCompetition>                                     
                </SingleParticipantes>
              ) : (
                <SingleParticipantes key={e._id}>
                  <Photo source={ImagemPerfil(e.atleta.nome.substring(0,1).toUpperCase())}/>
                  <NameCompetition>{e.atleta.nome}</NameCompetition> 
                  <MoreCompetition>
                    <IconWait name="timelapse" />
                  </MoreCompetition>                                     
                </SingleParticipantes>
              )
            })}            
          </ScrollView>
        )}
        
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
