import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HighlightCars } from '../../components/HighlightCard';
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
  function handleSignOut(){
    signOut();
  }
  function openEsportes(){
    console.log('oi')
    navigation.navigate('Esportes')
  }
  function openCompeticoes(){
    console.log('oi')
    navigation.navigate('Competicoes')
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
              <Icon 
                name="power"
                onPress={handleSignOut}
              />
            </UserWrapper>            
          </Header>
          <Content>
            <HighlightCars name="Esportes" onPress={openEsportes}/>  
            <HighlightCars name="user"/>          
          </Content>
          <Content>
            <HighlightCars name="Competições" onPress={openCompeticoes}/>          
          </Content>
        </Container>
      );   
}
