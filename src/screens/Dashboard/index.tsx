import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { HighlightCars } from '../../components/HighlightCard';
import Nivel from '../../util/Nivel';
import { ImagemPerfil } from '../../assets/alfabeto';
import { api } from '../../services/api';
import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserName,
  NivelName,
  Content,
  Icon
} from './styles';
import {useAuth} from '../../contexts/auth';

interface Item {
  _id: string;
  nome: string;
  competicoes:[{
    _id?: string;
    nome: string;
  }]
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

export function Dashboard(){
  const [competitions, setCompetitions] = useState<any>([]);
  const [nivel_atual, setNivelAtual] = useState(0);
  const navigation = useNavigation();
  const {signOut, user} = useAuth();

  useEffect(()=>{    
    async function fetchCompeticoes() {
      const response = await api.get(`/atletas/${user?._id}/competicoes`);
      setCompetitions(response.data);      
      setNivelAtual(Nivel(response.data.length));
    }
    fetchCompeticoes();
  },[nivel_atual]);

  function handleSignOut(){
    signOut();
  }
  function openEsportes(){
    navigation.navigate('Esportes')
  }
  function openPefil(){
    navigation.navigate('Perfil')
  }
  function openCompeticoes(){
    navigation.navigate('Competicoes')
  }
    return(
        <Container>
          <Header>
            <UserWrapper>
              <UserInfo>
              <Photo source={ImagemPerfil(user?.nome.substring(0,1).toUpperCase())}/>  
                <User>
                  <UserName>{ user?.nome }</UserName>
                  <NivelName>Nível {nivel_atual}</NivelName>
                </User>
              </UserInfo>
              <Icon 
                name="power"
                onPress={handleSignOut}
              />
            </UserWrapper>            
          </Header>
          <Content>
            <HighlightCars name="Esportes" onPress={openEsportes}/>  
            <HighlightCars name="user" onPress={openPefil}/>          
          </Content>
          <Content>
            <HighlightCars name="Competições" onPress={openCompeticoes}/>          
          </Content>
        </Container>
      );   
}
