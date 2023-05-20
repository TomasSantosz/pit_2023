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
import { Alert } from 'react-native';

export function Dashboard(){
  const [nivel_atual, setNivelAtual] = useState(0);
  const navigation = useNavigation();
  const {signOut, user} = useAuth();

  useEffect(()=>{    
    async function fetchCompeticoes() {
      const response = await api.get(`/atletas/${user?._id}/competicoes`);      
      setNivelAtual(Nivel(response.data.length));
    }
    fetchCompeticoes();
  },[]);

  function handleSignOut(){
    Alert.alert('Sair', 'Você realmente deseja sair?', [
      {text: 'Sair', onPress: () => signOut()},
      {text: 'Cancelar'},
    ]);
    
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
  function openRank(){
    navigation.navigate('Rank')
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
              name="exit-to-app"
              onPress={handleSignOut}
            />
          </UserWrapper>            
        </Header>
        <Content>
          <HighlightCars name="Esportes" icon={'basketball-hoop-outline'} onPress={openEsportes}/>  
          <HighlightCars name="Perfil" icon={'account-outline'} onPress={openPefil}/>          
        </Content>
        <Content>
          <HighlightCars name="Competições" icon={'whistle-outline'} onPress={openCompeticoes}/>  
          <HighlightCars name="Rank" icon={'podium-gold'} onPress={openRank}/>          
        </Content>
      </Container>
    );   
}
