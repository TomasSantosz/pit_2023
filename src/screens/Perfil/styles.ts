import styled from 'styled-components/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';



export const Container = styled.View`
    flex: 1;    
    background-color: ${({ theme }) => theme.colors.shape};
    align-items: center;   
`;
export const NumberOfMembers = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;
export const TypeSport = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const IconStar = styled(MaterialIcons)`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.primary};
`;
export const Content = styled.View`
    padding: 20px;    
    flex-direction: column;
`;
export const Participacoes = styled.View`
    height: ${RFPercentage(50)}px;
    padding: 15px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.background_card};
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const TitleParticipacoes = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(32)}px;
    align-items: flex-end;    
    flex-direction: column;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.secundary};
    margin-right: 30px;
    margin-top: -50px;
`;
export const IconMore = styled(MaterialIcons)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.primary};
`;
export const UserWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    height: ${RFPercentage(20)}px;
    width: 100%;
    color: red;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
`;

export const Photo = styled.Image`
    width: ${RFValue(150)}px;
    height: ${RFValue(150)}px;
    margin-top: ${RFValue(125)}px;
`;
export const User = styled.View`
    align-items: center;
`;
export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    align-items: center;
`;
export const UserLevel = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background_card};
    border-radius: 30px;
    margin-top: 15px;
    height: 50px;
    width: 130px;
`;
export const Level = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;


export const MoreCompetition = styled.Text`

`;

export const SingleCompetitions = styled.View`
    margin-top: 10px;
    width: ${RFValue(280)}px ;
    
    
    //background-color: green;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;   
    margin-bottom: 10px;
    border-bottom-color: ${({ theme }) => theme.colors.primary} ;
    border-bottom-width: 1px;
    padding-bottom: 5px;
`;

export const TypesCompetition = styled.View`
    flex-direction: row;
    width: 100% ;
    justify-content: space-between;
    align-items: flex-start;
    
    
`;
export const NameCompetition = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const DateCompetition = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;
