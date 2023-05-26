import styled from 'styled-components/native';
import { Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

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

export const Header = styled.View`
    flex: 0.30;
    width: 45%;
    margin-bottom: 0px;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px; 
`;

export const PerfilContent = styled.View`
    flex: 0.70;
    width: 100%;
    padding: 0px 25px 0px 25px;
    margin-bottom: 2%; 
`;

export const Photo = styled.Image`
    margin-top: ${RFValue(30)}px;
    width: ${RFValue(120)}px;
    height: ${RFValue(120)}px;
`;

export const User = styled.View`
    align-items: center;
    width: 100%;
    padding: 0px 30px 30px 30px;
    text-align: center;
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const UserLevel = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background_card};
    border-radius: 30px;
    margin-top: 15px;
    height: 50px;
    width: 50%;
`;



export const TitleParticipacoes = styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(22)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const IconStar = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const IconEdit = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(45)}px;
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 83%;
`;

export const Level = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;
export const ContentCompetitions = styled.View`
    flex: 0.75;
    padding: 0px 25px 0px 25px;
    margin-bottom: 2%; 
`;

export const SingleCompetitions = styled.View`  
    border-bottom-color: ${({ theme }) => theme.colors.primary} ;
    border-bottom-width: 0.5px;
    padding-top: 15px;
    padding-bottom:15px;
`;

export const TypesCompetition = styled.View`
    flex-direction: row;
    width: 100% ;
    align-items: center;
    justify-content: space-between;
    padding: 0px 5px 5px 0px;
`;

export const DivDate = styled.View`
    flex-direction: row;
    margin-top: 10px;
`; 

export const NameCompetition = styled.Text`
    font-size: ${RFValue(16)}px;
    width: 90%;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TypeSport = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-top: 5px;
    margin-bottom: 5px;
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
    align-items: center;
`;

export const MoreCompetition = styled.Text`

`;


export const IconMore = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Icons = styled(MaterialCommunityIcons)`
font-size: ${RFValue(20)}px;
color: ${({ theme }) => theme.colors.primary};
`; 