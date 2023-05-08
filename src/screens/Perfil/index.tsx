import React from 'react';
import { ScrollView } from 'react-native';
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
  IconMore
} from './styles';
import {useAuth} from '../../contexts/auth';
export function Perfil(){

  const {signOut, user} = useAuth();
  return(
      <Container>
        
        <Header>
          <UserWrapper>
              <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
              
          </UserWrapper>    
          <Icon name="settings"/>    
        </Header>
        <ScrollView horizontal={false}> 
        <User>
          <UserName>Tomás Santos</UserName>
          <UserLevel>
            <Level>Nível 3</Level>
          </UserLevel>
        </User>   
                
        <Content>          
          <Participacoes>
            <TitleParticipacoes>Competições</TitleParticipacoes>
            <ScrollView>
              <SingleCompetitions>
                <TypesCompetition>
                  <NameCompetition>Tira tira do industrial</NameCompetition>
                  <DateCompetition> 18/05 </DateCompetition> 
                  <MoreCompetition><IconMore name="more" /></MoreCompetition>
                </TypesCompetition>                
              </SingleCompetitions>
              <SingleCompetitions>
                <TypesCompetition>
                  <NameCompetition>Tira tira do industrial</NameCompetition>
                  <DateCompetition> 18/05 </DateCompetition> 
                  <MoreCompetition><IconMore name="more" /></MoreCompetition>
                </TypesCompetition>                
              </SingleCompetitions>
              <SingleCompetitions>
                <TypesCompetition>
                  <NameCompetition>Tira tira do industrial</NameCompetition>
                  <DateCompetition> 18/05 </DateCompetition> 
                  <MoreCompetition><IconMore name="more" /></MoreCompetition>
                </TypesCompetition>                
              </SingleCompetitions>
              <SingleCompetitions>
                <TypesCompetition>
                  <NameCompetition>Tira tira do industrial</NameCompetition>
                  <DateCompetition> 18/05 </DateCompetition> 
                  <MoreCompetition><IconMore name="more" /></MoreCompetition>
                </TypesCompetition>                
              </SingleCompetitions>
              <SingleCompetitions>
                <TypesCompetition>
                  <NameCompetition>Tira tira do industrial</NameCompetition>
                  <DateCompetition> 18/05 </DateCompetition> 
                  <MoreCompetition><IconMore name="more" /></MoreCompetition>
                </TypesCompetition>                
              </SingleCompetitions>
              <SingleCompetitions>
                <TypesCompetition>
                  <NameCompetition>Tira tira do industrial</NameCompetition>
                  <DateCompetition> 18/05 </DateCompetition> 
                  <MoreCompetition><IconMore name="more" /></MoreCompetition>
                </TypesCompetition>                
              </SingleCompetitions>
              <SingleCompetitions>
                <TypesCompetition>
                  <NameCompetition>Tira tira do industrial</NameCompetition>
                  <DateCompetition> 18/05 </DateCompetition> 
                  <MoreCompetition><IconMore name="more" /></MoreCompetition>
                </TypesCompetition>                
              </SingleCompetitions>
              <SingleCompetitions>
                <TypesCompetition>
                  <NameCompetition>Tira tira do industrial</NameCompetition>
                  <DateCompetition> 18/05 </DateCompetition> 
                  <MoreCompetition><IconMore name="more" /></MoreCompetition>
                </TypesCompetition>                
              </SingleCompetitions>
              <SingleCompetitions>
                <TypesCompetition>
                  <NameCompetition>Tira tira do industrial</NameCompetition>
                  <DateCompetition> 18/05 </DateCompetition> 
                  <MoreCompetition><IconMore name="more" /></MoreCompetition>
                </TypesCompetition>                
              </SingleCompetitions>
            </ScrollView>              
          </Participacoes>
          <Participacoes>
            <TitleParticipacoes>FeedBack</TitleParticipacoes>
            <ScrollView>
              
            </ScrollView>              
          </Participacoes>  
        </Content>
        </ScrollView>
      </Container>
    );   
}
