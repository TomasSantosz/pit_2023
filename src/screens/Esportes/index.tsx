import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Forms/Button'

import { 
  Container,
  TypesCompetition,
  ContentCompetitions,
  SingleCompetitions,
  NameCompetition,
  Header,
  SportName,
  Content
} from './styles';
import { api } from '../../services/api';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import Lottie from 'lottie-react-native';

interface Item {
  _id: string;
  nome: string;
  Regras: string;
  aproved: boolean;
}

export function Esportes(){
  const navigation = useNavigation();  
  const [esportes, setEsportes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEsportes() {
      const response = await api.get('/Esportes');
      setEsportes(response.data);
      setTimeout(function(){
        setLoading(false); 
      },100);
    }
    fetchEsportes();
  },[esportes]);

  function openInsertSport(){
    navigation.navigate('InserirEsportes');
  }  

  function openCompetitionWithSport(nome:string){
    navigation.navigate('Competicoes', { 
      nome 
    });
  }
  
  if(loading){
    return (
      <View style={{flex: 1, backgroundColor: '#EBEBEB',justifyContent: 'center', alignItems: 'center'}}>
        <Lottie source={require('../../assets/lottie/70493-loading-spinner.json')} autoPlay loop />
      </View>
    )
  } 

  return(    
    <Container>
      <Header>
        <SportName>Esportes</SportName>        
      </Header>
      <Content>
        <ContentCompetitions>              
          <ScrollView>
            {esportes.map((item:Item, index)=>{
              return item.aproved === false && (
                <SingleCompetitions key={item._id} onPress={()=>openCompetitionWithSport(item.nome)}>
                  <TypesCompetition>
                    <NameCompetition>{item.nome}</NameCompetition>
                  </TypesCompetition>                            
                </SingleCompetitions>
              )              
            })}             
          </ScrollView>
        </ContentCompetitions>      
      <Button title="Inserir Esporte" onPress={openInsertSport} />
      </Content>
    </Container>
  );   
}
