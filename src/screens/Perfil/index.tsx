import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import moment from 'moment';
import Nivel from '../../util/Nivel';
import { api } from '../../services/api';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImagemPerfil } from '../../assets/alfabeto';
import { 
  Container,
  Header,
  Photo,
  UserName,
  Content,
  User,
  UserLevel,
  Level,
  TitleParticipacoes,
  TypesCompetition,
  SingleCompetitions,
  NameCompetition,
  DateCompetition,
  MoreCompetition,
  TypeSport,
  NumberOfMembers,
  IconStar,
  IconEdit
} from './styles';

import {useAuth} from '../../contexts/auth';
import Lottie from 'lottie-react-native';
interface Item {
  _id: string;
  nome: string;
  esporte: {
    nome: string;
    Regras: string;
  }
  atletasArray: any;
  DataInicio:string;
  DataTermino: string;
  NumPart: number;

}
export function Perfil(){
  const [competitions, setCompetitions] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [nivel_atual, setNivelAtual] = useState(0);
  const {signOut, user } = useAuth();
  const navigation = useNavigation();

  useEffect(()=>{    
    async function fetchCompeticoes() {
      const response = await api.get(`/atletas/${user?._id}/competicoes`);
      setCompetitions(response.data);      
      setNivelAtual(Nivel(response.data.length));
      setTimeout(function(){
        setLoading(false); 
      },100); 
    }
    fetchCompeticoes();
  },[competitions]);

  
  function openMoreDetails(_id:string){
    navigation.navigate('Competicao', { 
      _id
    });
  }

  function openEditPerfil(_id:string){
    navigation.navigate('EditarAtleta');
  }

  function VerificarDisponibilidade(dataTermino: Date){
    var dateHoje = moment(new Date(Date.now())).format("YYYY/MM/DD")
    var date = moment(new Date(dataTermino)).format("YYYY/MM/DD")
    if(date >= dateHoje){
      return true;
    }
    return false;
  }

  if(loading){
    return (
      <View style={{flex: 1, backgroundColor: '#EBEBEB',justifyContent: 'center', alignItems: 'center'}}>
        <Lottie source={require('../../assets/lottie/70493-loading-spinner.json')} autoPlay loop />
      </View>
    )
  }
  return(
      <Container>        
        <Header>              
            <Photo source={ImagemPerfil(user?.nome.substring(0,1).toUpperCase())}/>              
        </Header>
        <IconEdit onPress={()=> openEditPerfil(user?._id)} name="account-edit" />
        <User>
          <UserName>{user?.nome}</UserName>
          <UserLevel>
            <Level>Nível {nivel_atual}</Level>
          </UserLevel>
        </User>  
        <ScrollView>                 
        <TitleParticipacoes>Competições</TitleParticipacoes>
        <Content>              
          {competitions.map((item:Item)=>{          
            return VerificarDisponibilidade(new Date(item.DataTermino)) === true &&(
              <SingleCompetitions key={item._id}>
                <TypesCompetition>
                  <NameCompetition>{item.nome}</NameCompetition>
                  <MoreCompetition ><IconStar onPress={()=> openMoreDetails(item._id)} name="page-next-outline" /></MoreCompetition>
                </TypesCompetition>                
                <TypeSport>{item.esporte.nome}</TypeSport>                
                <TypesCompetition>      
                  <DateCompetition>Data: {moment(item.DataInicio).format("DD/MM/YYYY")} </DateCompetition>
                  <NumberOfMembers>Participantes: {item.atletasArray.length} /{item.NumPart}</NumberOfMembers>                  
                </TypesCompetition>                
              </SingleCompetitions>
            )
          })}             
        </Content>
      </ScrollView>
      </Container>
    );   
}
