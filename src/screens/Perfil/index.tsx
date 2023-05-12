import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import moment from 'moment';
import Nivel from '../../util/Nivel';
import { api } from '../../services/api';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
  Container,
  Header,
  UserWrapper,
  Photo,
  UserName,
  Content,
  Icon,
  User,
  UserLevel,
  Level,
  Participacoes,
  TitleParticipacoes,
  TypesCompetition,
  SingleCompetitions,
  NameCompetition,
  DateCompetition,
  MoreCompetition,
  TypeSport,
  NumberOfMembers,
  IconStar,
  IconMore,
  
} from './styles';
import {useAuth} from '../../contexts/auth';
interface Item {
  _id: string;
  nome: string;
  esporte: {
    nome: string;
    Regras: string;
  }
  atletas: {
    forEach:(atleta: object) => void,
    length: any,
  };
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
    const competicoesUsuario: Item[] = [];

    async function fetchCompeticoes() {
      const response = await api.get('/Competicoes');
      response.data.forEach((competicoes:Item) => {        
        competicoes.atletas.forEach((atleta: any) => {
          if(atleta._id === user?._id){
            competicoesUsuario.push(competicoes)
          }
        });        
      });
      setNivelAtual(Nivel(competicoesUsuario.length));
      setCompetitions(competicoesUsuario);
      setLoading(false); 
    }
    fetchCompeticoes();
    
  },[nivel_atual]);

  
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
        <ActivityIndicator size={'large'} color="#555"/>
      </View>
    )
  }

  return(
      <Container>
        
        <Header>
          <UserWrapper>
              <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
              
          </UserWrapper>    
          <Icon name="settings" onPress={openEditPerfil}/>    
        </Header>
        {/* <ScrollView horizontal={false}>  */}
        <User>
          <UserName>{user?.nome}</UserName>
          <UserLevel>
            <Level>Nível {nivel_atual}</Level>
          </UserLevel>
        </User>                   
        <Content>          
          <Participacoes>
            <TitleParticipacoes>Competições</TitleParticipacoes>
            <ScrollView>
              {competitions.map((item:Item)=>{              
                return VerificarDisponibilidade(new Date(item.DataTermino)) === true &&(
                  <SingleCompetitions key={item._id}>
                    <TypesCompetition>
                      <NameCompetition>{item.nome}</NameCompetition>
                      <MoreCompetition ><IconStar onPress={()=> openMoreDetails(item._id)} name="more" /></MoreCompetition>
                    </TypesCompetition>                
                    <TypeSport>{item.esporte.nome}</TypeSport>                
                    <TypesCompetition>      
                      <DateCompetition>Data: {moment(item.DataInicio).format("DD/MM/YYYY")} </DateCompetition>
                      <NumberOfMembers>Participantes: {item.atletas.length} /{item.NumPart}</NumberOfMembers>                  
                    </TypesCompetition>                
                  </SingleCompetitions>
                )
              })}              
            </ScrollView>              
          </Participacoes>
          {/* <Participacoes>
            <TitleParticipacoes>FeedBack</TitleParticipacoes>
            <ScrollView>
              
            </ScrollView>              
          </Participacoes> */}  
        </Content>
        {/* </ScrollView> */}
      </Container>
    );   
}
