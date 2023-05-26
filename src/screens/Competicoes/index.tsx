import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Button } from '../../components/Forms/Button'
import { 
  Container,
  TypesCompetition,
  ContentCompetitions,
  SingleCompetitions,
  NameCompetition,
  TypeSport,
  DateCompetition,
  NumberOfMembers,
  MoreCompetition,
  Header,
  Content,
  CompetitionName,
  IconMore,
  Icons,
  DivDate
} from './styles';
import { api } from '../../services/api';
import { ScrollView, View,StatusBar, ActivityIndicator } from 'react-native';
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

interface Route{
  route:{
    params: {
      nome: string;
    };
  }
}

export function Competicoes({ route }:Route){
  const navigation = useNavigation();
  
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCompeticoes() {        
      const response = await api.get('/Competicoes')      
      if(route.params.nome){
        let competitionsSport:any = [];
        response.data.forEach((e:any)=>{
          if(e.esporte.nome === route.params.nome){
            competitionsSport.push(e)
          }
        })
        setCompetitions(competitionsSport)
      }else{
        setCompetitions(response.data);
      }     
      setTimeout(function(){
        setLoading(false); 
      },100);
    }
    fetchCompeticoes();
  },[competitions]);

  function VerificarDisponibilidade(dataTermino: Date){
    var dateHoje = moment(new Date(Date.now())).format("YYYY/MM/DD")
    var date = moment(new Date(dataTermino)).format("YYYY/MM/DD")
    if(date >= dateHoje){
      return true;
    }
    return false;
  }

  function openMoreDetails(_id:string){
    navigation.navigate('Competicao', { 
      _id 
    });
  }
  function openInsertCompetition(){
    navigation.navigate('InserirCompeticoes');
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
    <StatusBar  barStyle={'light-content'} backgroundColor={"#555"}/>
      <Container style={{ backgroundColor:"#555"}}> 
      <Content>
        <Header>
          <CompetitionName>Competições</CompetitionName>        
        </Header>
        <ContentCompetitions>
          <ScrollView>
            {competitions.map((item:Item, index)=>{
              let numeroAprovados = 0
              item.atletasArray.forEach((res:any)=>{
                if(res.aprovado === true){
                  numeroAprovados++;
                }
              })
              const data = moment(item.DataInicio).utcOffset('-03:00').format("DD/MM/YYYY HH:mm");
              const dataInicioSplit = data.split(' ')
              return VerificarDisponibilidade(new Date(item.DataTermino)) === true && (
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
        </ContentCompetitions>
        <Button title="Inserir Competição" onPress={openInsertCompetition}/>
      </Content>
    </Container>
    </> 
  );   
}
