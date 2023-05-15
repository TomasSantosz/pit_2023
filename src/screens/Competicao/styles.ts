import styled from 'styled-components/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

//Header

export const InfoCompetition = styled.View`
    width: 100%;
    padding: 0 18px 24px 18px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(24)}px;
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
    
    background-color: ${({ theme }) => theme.colors.background_card};

    width: ${RFValue(320)}px ;
    height: ${RFValue(420)}px ;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 15px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;    
`;
export const Photo = styled.Image`
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;
    border-radius: 50px;
`;



export const Icon = styled(MaterialIcons)`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const IconAccept = styled(Feather)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.success};
`;
export const IconDecline = styled(Feather)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.attention};
`;

export const Accept = styled.View`
    flex-direction: row;
    align-items: center;
    background-color : aliceblue;
    width: ${RFValue(80)}px;
    justify-content: space-around;
    align-items: center;  
    
`;


export const NameCompetitions = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    //background-color: green;
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.bold};

    justify-content: center;
    align-items: flex-end;
    margin-bottom: 20px;
`;
export const SingleParticipantes = styled.View`
    margin-top: 10px;
    width: ${RFValue(280)}px ;
    
    
    //background-color: green;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;   
    margin-bottom: 10px;
    border-bottom-color: ${({ theme }) => theme.colors.primary} ;
    border-bottom-width: 0.5px;
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
    width: ${RFValue(80)}px;
`;






export const Content = styled.View`
    padding-top: 15px;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;
export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(25)}px;
    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: flex-end;
    
    flex-direction: row;
`;


export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const User = styled.View`
    margin-left: 17px;
`;




