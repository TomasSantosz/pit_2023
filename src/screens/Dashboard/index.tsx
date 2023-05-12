import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HighlightCars } from '../../components/HighlightCard';
import Nivel from '../../util/Nivel';
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

export function Dashboard(){
  const navigation = useNavigation();
  const {signOut, user} = useAuth();
  console.log(user)
  
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
              <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                <User>
                  <UserName>{ user?.nome }</UserName>
                  <NivelName>Nível {Nivel()}</NivelName>
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
