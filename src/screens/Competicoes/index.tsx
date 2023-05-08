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

interface Item {
  _id: string;
  nome: string;
  esporte: {
    nome: string;
    Regras: string;
  }
  DataInicio:string;
  DataTermino: string;
  NumPart: number;

}

export function Competicoes(){
  const navigation = useNavigation();
  
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    async function fetchCompeticoes() {
      const response = await api.get('/Competicoes')
      setCompetitions(response.data);
      console.log(competitions);
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
          <NameCompetitions>Competições Disponíveis</NameCompetitions>
          <ScrollView>
            {competitions.map((item:Item, index)=>{
              console.log(item,"---");
              
              return VerificarDisponibilidade(new Date(item.DataTermino)) === true && (
                <SingleCompetitions key={item._id}>
                  <TypesCompetition>
                    <NameCompetition>{item.nome}</NameCompetition>
                    <MoreCompetition ><IconStar onPress={()=> openMoreDetails(item._id)} name="more" /></MoreCompetition>
                  </TypesCompetition>                
                  <TypeSport>{item.esporte.nome}</TypeSport>                
                  <TypesCompetition>      
                    <DateCompetition>Data: {moment(item.DataInicio).format("DD/MM/YYYY")} </DateCompetition>
                    <NumberOfMembers>Participantes: 8/{item.NumPart}</NumberOfMembers>                  
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
