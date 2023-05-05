import React from 'react';

import { 
  Container,
  MoreCompetition,
  Icon,
  ContentParticipacao,
  NameCompetitions,
  SingleParticipantes,
  NameCompetition,
  Photo,
  Header,
  InfoCompetition,
  SubTitles,
  Title,
  Content,
} from './styles';
import { ScrollView } from 'react-native';

export function Competicao(){
    return(
        <Container>
          <Header>
            <InfoCompetition>
                  <Title>Tira Tira do Industrial</Title>
                  <SubTitles>Data: 04/05/2023</SubTitles>
                  <SubTitles>Local: Rua industrail, 1998 - Industrial, Contagem-MG</SubTitles>
            </InfoCompetition>            
          </Header>
          <Content>
            <ContentParticipacao>
              
              <NameCompetitions>Participantes  9/10</NameCompetitions>
              <ScrollView>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition><Icon name="stars" /></MoreCompetition>             
                </SingleParticipantes>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition></MoreCompetition>             
                </SingleParticipantes>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition></MoreCompetition>             
                </SingleParticipantes>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition></MoreCompetition>             
                </SingleParticipantes>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition></MoreCompetition>             
                </SingleParticipantes>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition></MoreCompetition>             
                </SingleParticipantes>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition></MoreCompetition>             
                </SingleParticipantes>
                <SingleParticipantes>
                    <Photo source={{ uri:'https://pbs.twimg.com/profile_images/1649875394097553408/Ky0gXom4_400x400.jpg'}}/>
                    <NameCompetition>Tomas Santos</NameCompetition> 
                    <MoreCompetition></MoreCompetition>             
                </SingleParticipantes>
              </ScrollView>
            </ContentParticipacao>  
            
                     
          </Content>
        </Container>
      );   
}
