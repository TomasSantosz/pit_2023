import styled from 'styled-components/native';
import { Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

//Header

export const InfoCompetition = styled.View`
    align-items: center; 
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    width: 50%;
    font-size: ${RFPercentage(3.5)}px; 
    font-family: ${({ theme }) => theme.fonts.bold};
`;
export const SubTitles = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;  
    width: 40%;
    font-size: ${RFPercentage(1.8)}px; 
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    background-color: ${({ theme }) => theme.colors.shape};
`;

//Div participacao

export const ContentParticipacao = styled.View`
    width: ${RFValue(310)}px; 
    height: 57%;
    flex-direction: column;
    align-items: center;    
`;
export const Photo = styled.Image`
    width: 35px;
    height: 35px;
    border-radius: 50px;
`;

export const IconSettings = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.shape};
    margin-left: ${RFValue(260)}px;
`;

export const Icon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(35)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const IconAccept = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.primary};
`;
export const IconDecline = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const IconWait = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Accept = styled.View`
    flex-direction: row;
    align-items: center;
    width: ${RFValue(80)}px;
    justify-content: space-around;    
`;

export const NameCompetitions = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;
export const SingleParticipantes = styled.View`
    margin-top: 3%;
    width: ${RFValue(310)}px;
    //background-color: green;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;  
    border-bottom-color: ${({ theme }) => theme.colors.primary} ;
    border-bottom-width: 0.5px;
    padding: ${RFPercentage(1.5)}px; 
`;

export const TypesCompetition = styled.View`
    flex-direction: row;
    width: 100% ;
    justify-content: space-between;
    align-items: flex-start;   
`;
export const NameCompetition = styled.Text`
    font-size: ${RFValue(16)}px;
    max-Width: ${RFValue(150)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TypeSport = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const DateCompetition = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const NumberOfMembers = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const MoreCompetition = styled.Text`
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
`;


export const Header = styled.View`
    justify-content: space-around;
    align-items: center;
    
    flex-direction: row;
    width: 100%;
    //height: ${RFPercentage(35)}px;
    padding: ${RFPercentage(1)}px; 
    background-color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${RFPercentage(1.5)}px;

    border-bottom-left-radius: ${RFValue(40)}px;
    border-bottom-right-radius: ${RFValue(40)}px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const User = styled.View`
    margin-left: 17px;
`;




