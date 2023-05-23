import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { api } from '../../services/api';
import { View, ActivityIndicator } from 'react-native';
import { ImagemPerfil } from '../../assets/alfabeto';
import { 
  Container,
  Header,
  Content,
  RankContent,
  TitleRank,
  SingleAtleta,
  NameAtleta,
  Photo,
  PontuacaoAtleta,
  DadosAtleta,
  AtributosAtleta,
  PosicaoAtleta,
  Score,
  ScoreNumber,
  ScoreText
} from './styles';
import {useAuth} from '../../contexts/auth';
import Lottie from 'lottie-react-native';
export function Rank(){
  const [rank, setRank] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [posicao, setPosicao] = useState<any>({})
  const { user } = useAuth();

  useEffect(()=>{    
    async function fetchCompeticoes() {
      const response = await api.get(`/rank`);
      setRank(response.data); 
      response.data.forEach((res:any, posicao:number)=>{
        if(res.atleta._id === user?._id){
          setPosicao(posicao + 1)
        }
      })  
      
      setTimeout(function(){
        setLoading(false); 
      },100);
    }
    fetchCompeticoes();
  },[]);

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
          <TitleRank>Ranking</TitleRank>
          <Score>
            <ScoreNumber>{ posicao }º</ScoreNumber>
            <ScoreText>Sua Colocação</ScoreText>
          </Score>
        </Header>                  
        <Content>          
          <RankContent>
            <ScrollView>
              {rank && rank.map((item:any, posicao:number)=>{    
                return (
                  <SingleAtleta key={item.atleta._id}>
                    <DadosAtleta>
                      <Photo source={ImagemPerfil(item.atleta.nome.substring(0,1).toUpperCase())}/>
                      <AtributosAtleta>
                        <NameAtleta>{item.atleta.nome}</NameAtleta>
                        <PontuacaoAtleta>{item.pontos} Pontos</PontuacaoAtleta> 
                      </AtributosAtleta> 
                      <PosicaoAtleta>{posicao + 1 }º</PosicaoAtleta> 
                    </DadosAtleta>
                  </SingleAtleta>
                )
              })}              
            </ScrollView>              
          </RankContent>  
        </Content>
      </Container>
    );   
}
