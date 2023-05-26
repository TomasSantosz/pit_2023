import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import moment from 'moment';
import Nivel from '../../util/Nivel';
import { api } from '../../services/api';
import { View, ActivityIndicator, StatusBar, Platform} from 'react-native';
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
  DivDate,
  ContentCompetitions,
  Icons,
  IconMore,
  IconStar,
  IconEdit,
  PerfilContent
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
    <> 
    <StatusBar  barStyle={"dark-content"} backgroundColor={"#EBEBEB"}/>
      <Container style={{ backgroundColor:"#EBEBEB"}}>      
      <Content>  
        <Header>              
          <Photo source={ImagemPerfil(user?.nome.substring(0,1).toUpperCase())}/>              
        </Header>
        
        <PerfilContent>
          <User>
            <IconEdit onPress={()=> openEditPerfil(user?._id)} name="account-edit" />           
            <UserName>{user?.nome}</UserName>
            <UserLevel>
              <Level>Nível {nivel_atual}</Level>
            </UserLevel>
          </User> 
          <ScrollView>                 
          <TitleParticipacoes>Competições</TitleParticipacoes>
          
          {competitions.map((item:Item)=>{    
            let numeroAprovados = 0
            item.atletasArray.forEach((res:any)=>{
              if(res.aprovado === true){
                numeroAprovados++;
              }
            })
            const data = moment(item.DataInicio).utcOffset('-03:00').format("DD/MM/YYYY HH:mm");
              const dataInicioSplit = data.split(' ')   
            return VerificarDisponibilidade(new Date(item.DataTermino)) === true &&(
              <SingleCompetitions key={item._id}>
              <TypesCompetition>
                <NameCompetition>{item.nome}</NameCompetition>
                <MoreCompetition ><IconMore onPress={()=> openMoreDetails(item._id)} name="expand-all-outline" /></MoreCompetition>
              </TypesCompetition>                
              <TypeSport>{item.esporte.nome}</TypeSport>                
              <TypesCompetition>      
                <DivDate><Icons name="calendar-range" /><DateCompetition> {dataInicioSplit[0]} </DateCompetition></DivDate>
                <DivDate><Icons name="clock-time-four-outline" /><DateCompetition> {dataInicioSplit[1].substring(0,5)} </DateCompetition></DivDate>
                <DivDate><Icons name="account-multiple" /><NumberOfMembers> {`${numeroAprovados}/${item.NumPart}`}</NumberOfMembers></DivDate>                 
              </TypesCompetition>                
            </SingleCompetitions>
            )
          })}      
        </ScrollView>
        </PerfilContent>       
        </Content>
      </Container>
      </>
    );   
}
