import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Button } from '../../components/Forms/Button'
import { useAuth } from '../../contexts/auth';
import { 
  Container,
  SportName,
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
  SportInfo,
  Photo,
  UserName,
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
  esporte: {
    nome: string;
    Regras: string;
  }
  atletas: any;
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

export function CompeticoesEsporte({ route }:Route){
  const navigation = useNavigation();
  
  
  const [competitions, setCompetitions] = useState([]);
  console.log(route.params.nome)
  useEffect(() => {
    async function fetchCompeticoes() {
      const response = await api.get('/Competicoes')
      setCompetitions(response.data);
    }
    fetchCompeticoes();
  },[]);

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
  
  return(
    
    <Container>
      <Header>
        <UserWrapper>
          <SportInfo>
            <SportName>{route.params.nome}</SportName>
          </SportInfo>
        </UserWrapper>            
      </Header>
      <Content>
        <ContentCompetitions>              
          <NameCompetitions>Competições Disponíveis</NameCompetitions>
          <ScrollView>
            {competitions.map((item:Item, index)=>{              
              return VerificarDisponibilidade(new Date(item.DataTermino)) === true && item.esporte.nome === route.params.nome && (
                <SingleCompetitions key={item._id}>
                  <TypesCompetition>
                    <NameCompetition>{item.nome}</NameCompetition>
                    <MoreCompetition ><IconStar onPress={()=> openMoreDetails(item._id)} name="more" /></MoreCompetition>
                  </TypesCompetition>                
                  <TypeSport>{item.esporte.nome}</TypeSport>                
                  <TypesCompetition>      
                    <DateCompetition>Data: {moment(item.DataInicio).format("DD/MM/YYYY")} </DateCompetition>
                    <NumberOfMembers>Participantes: {item.atletasArray.length}/{item.NumPart}</NumberOfMembers>                  
                  </TypesCompetition>                
                </SingleCompetitions>
              )
            })}             
          </ScrollView>
        </ContentCompetitions>      
      <Button title="Inserir Competição" onPress={openInsertCompetition}/>
      </Content>
    </Container>
  );   
}
