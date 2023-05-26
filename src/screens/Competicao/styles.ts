import styled from 'styled-components/native';
import { Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

//Main  
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};

    justify-content: center;
    align-items: center; 
`;

//Header
export const Header = styled.View`
    flex: 0.35;
    width: 100%;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px;
    margin-bottom: 20px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;


export const InfoCompetition = styled.View`
    align-items: center;
    width: 100%;
    color: ${({ theme }) => theme.colors.shape};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    font-size: ${RFValue(22)}px; 
    font-family: ${({ theme }) => theme.fonts.bold};
`;
export const DivSubTitles = styled.View`
    flex-direction: row;
    justify-content: center;    
    margin-top:15px;
    width: 90%;    
`;

export const SubTitles = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    text-align: center;
    font-size: ${RFValue(13)}px;
`;

export const Icons = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.shape}; 
    margin-right: 10px;    
    margin-left: 10px;
`; 

export const IconSettings = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.shape};
    margin-left: 30px;
    margin-bottom: 10px;
`;

//Div participacao

export const ContentParticipacao = styled.View`
    width: ${RFValue(310)}px; 
    flex: 0.65;
    flex-direction: column;
    align-items: center;    
`;
export const Photo = styled.Image`
    width: 35px;
    height: 35px;
    border-radius: 50px;
`;



export const Icon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(35)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const IconAccept = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.primary};
`;
export const IconDecline = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(25)}px;
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

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const User = styled.View`
    margin-left: 17px;
`;




