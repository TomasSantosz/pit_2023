import React from 'react';

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
  const {signOut, user} = useAuth();
  function handleSignOut(){
    signOut();
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
            <HighlightCars />  
            <HighlightCars />          
          </Content>
          <Content>
            <HighlightCars />          
          </Content>
        </Container>
      );   
}
