import styled from 'styled-components/native';
import { Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

//Header

export const InfoCompetition = styled.View`
    padding: 0 0px 24px 0px;
    align-items: center;
    margin-top: ${RFPercentage(10)}px;    
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;
export const SubTitles = styled.Text`
     color: ${({ theme }) => theme.colors.shape};
    text-align: center;  
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;



export const Container = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    height: 100% ;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.shape};
`;

//Div participacao

export const ContentParticipacao = styled.View`
    width: ${RFPercentage(100)}px; 
    height: ${RFPercentage(64)}px; 
    border-radius: 15px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;    
`;
export const Photo = styled.Image`
    width: ${RFValue(35)}px;
    height: ${RFValue(35)}px;
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

    justify-content: center;
    align-items: flex-end;
    margin-bottom: 20px;
`;
export const SingleParticipantes = styled.View`
    margin-top: 10px;
    width: ${RFPercentage(46)}px;   
    
    //background-color: green;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;  
    border-bottom-color: ${({ theme }) => theme.colors.primary} ;
    border-bottom-width: 0.5px;
    padding: 10px;
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

export const Content = styled.View`
    padding-top: 15px;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;
export const Header = styled.View`
    justify-content: space-around;
    align-items: center;
    
    flex-direction: row;
    padding-bottom: 10px;
    width: 100%;
    height: ${RFPercentage(25)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${RFValue(15)}px;

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




