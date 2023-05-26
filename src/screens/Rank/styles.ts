import styled from 'styled-components/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


//Header
export const Container = styled.SafeAreaView`
    flex: 1;    
`;

export const Content = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};

    justify-content: center;
    align-items: center; 
`;

export const Header = styled.View`
    width: 100%;
    flex: 0.35;
    margin-bottom: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;
export const TitleRank = styled.Text`
    color: ${({ theme }) => theme.colors.secundary};
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;
export const Score = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const ScoreNumber = styled.Text`
    color: ${({ theme }) => theme.colors.secundary};
    font-size: ${RFValue(50)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ScoreText = styled.Text`
    color: ${({ theme }) => theme.colors.secundary};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;
//Body


export const RankContent = styled.View`
    flex: 0.65;
    padding: ${RFPercentage(1)}px;
    flex-direction: column;
    align-items: center;
`;

export const SingleAtleta = styled.View`
    width: 97%; 
    height:  ${RFValue(80)}px;
    //background-color: green;
    flex-direction: column;
    justify-items: center;
    align-items: flex-start; 
    border-bottom-color: ${({ theme }) => theme.colors.primary} ;
    border-bottom-width: 0.4px;
    padding-bottom: ${RFPercentage(1)}px;  ;    
`;

export const Photo = styled.Image`
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;
    border-radius: 50px;
`;

export const DadosAtleta = styled.View`
    margin-top: ${RFPercentage(1)}px;  
    width: 100%; 
    flex-direction: row;
    justify-items: center;
    align-items: center;   
`;

export const AtributosAtleta = styled.View`
    width: 70%; 
    flex-direction: column;  
    margin-left: ${RFPercentage(1)}px;  
`;
export const NameAtleta = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
    max-width: 210px;
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
