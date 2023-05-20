import styled from 'styled-components/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';



export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    height: 100%;
`;

export const Content = styled.View`
    width: 100%;
    height: ${RFPercentage(100)}px;
    align-items: center;
    flex-direction: column;
`;

export const ContentCompetitions = styled.View`    
    width: 100% ;
    height: ${RFPercentage(65)}px;
    border-radius: 15px;
    padding: ${RFValue(0)}px ${RFValue(25)}px ${RFValue(0)}px ${RFValue(25)}px ;
    margin-bottom: ${RFPercentage(2)}px; 
`;
export const SingleCompetitions = styled.View`   
    width:100%;     
    border-bottom-color: ${({ theme }) => theme.colors.primary} ;
    border-bottom-width: 0.5px;
    padding-top: ${RFValue(15)}px;
    padding-bottom:${RFValue(15)}px;
`;

export const TypesCompetition = styled.View`
    flex-direction: row;
    width: 100% ;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${RFValue(0)}px ${RFValue(5)}px ${RFValue(5)}px ${RFValue(0)}px;
`;
export const NameCompetition = styled.Text`
    font-size: ${RFValue(17)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TypeSport = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
    padding: ${RFValue(0)}px ${RFValue(5)}px ${RFValue(5)}px ${RFValue(0)}px;
`;

export const DateCompetition = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-top: 10px;
`;

export const NumberOfMembers = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-top: 10px;
`;

export const MoreCompetition = styled.Text`

`;








export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(25)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${RFValue(15)}px;

    justify-content: center;
    align-items: center; 

    border-bottom-left-radius: ${RFValue(40)}px;
    border-bottom-right-radius: ${RFValue(40)}px;
`;

export const CompetitionName = styled.Text`
    margin-top: ${RFPercentage(10)}px;
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;


export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;


export const IconMore = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.primary};
`;
