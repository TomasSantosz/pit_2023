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
  const navigation = useNavigation();
  const {signOut, user} = useAuth();
  const [nivel_atual, setNivelAtual] = useState(0);
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
