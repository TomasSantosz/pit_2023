import React from 'react';

import { RFValue } from 'react-native-responsive-fontsize';
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

export function Dashboard(){
    return(
        <Container>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1620098103863873549/ck6AI5hA_400x400.jpg'}}/>
                <User>
                  <UserName>Tomás Santos</UserName>
                  <NivelName>Nível 3</NivelName>
                </User>
              </UserInfo>
              <Icon name="power"/>
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
