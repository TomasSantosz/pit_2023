import styled from 'styled-components/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


//Header
export const Container = styled.View`
    flex: 1;    
    background-color: ${({ theme }) => theme.colors.shape};
    align-items: center;   
`;

export const Header = styled.View`
    padding: 20px;
    width: 100%;
    height: ${RFPercentage(40)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;
export const TitleRank = styled.Text`
    color: ${({ theme }) => theme.colors.secundary};
    font-size: ${RFValue(35)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;
export const Score = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const ScoreNumber = styled.Text`
    color: ${({ theme }) => theme.colors.secundary};
    font-size: ${RFValue(45)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ScoreText = styled.Text`
    color: ${({ theme }) => theme.colors.secundary};
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;
//Body
export const Content = styled.View`
    padding: 10px;    
    flex-direction: column;
`;

export const RankContent = styled.View`
    height: ${RFPercentage(50)}px;
    padding: 15px;
    border-radius: 30px;
    //background-color: ${({ theme }) => theme.colors.background_card};
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const SingleAtleta = styled.View`
    width: ${RFValue(300)}px; 
    height:  ${RFValue(80)}px;
    //background-color: green;
    flex-direction: column;
    justify-items: center;
    align-items: flex-start; 
    border-bottom-color: ${({ theme }) => theme.colors.primary} ;
    border-bottom-width: 0.4px;
    padding-bottom: 5px;
`;

export const Photo = styled.Image`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    border-radius: 50px;
`;

export const DadosAtleta = styled.View`
    margin-top: 10px;
    width: ${RFValue(300)}px ; 
    flex-direction: row;
    justify-items: center;
    align-items: center;   
`;

export const AtributosAtleta = styled.View`
    width: ${RFValue(200)}px ; 
    flex-direction: column;  
    margin-left: 10px;
`;
export const NameAtleta = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
    max-width: 200px;
`;
export const PontuacaoAtleta = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const PosicaoAtleta = styled.Text`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
`;


