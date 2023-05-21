import styled from 'styled-components/native';
import { Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;    
    background-color: ${({ theme }) => theme.colors.shape};
    align-items: center;   
    justify-items: center;
    justify-content: center;
    text-align: center;
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    height: ${RFValue(210)}px;
    width: ${RFValue(160)}px;
    align-items: center;
    justify-content: center; 
    border-bottom-left-radius: ${RFValue(40)}px;
    border-bottom-right-radius: ${RFValue(40)}px;
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
    margin-bottom: ${RFValue(10)}px;
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const UserLevel = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background_card};
    border-radius: 30px;
    margin-top: ${RFValue(15)}px;
    height: ${RFValue(50)}px;
    width: ${RFValue(130)}px;
`;

export const Content = styled.View`
    padding-top: ${RFValue(20)}px;
`;

export const TitleParticipacoes = styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(22)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const SingleCompetitions = styled.View`
    justify-content: space-between;
    padding: ${RFPercentage(2)}px ${RFPercentage(0)}px ${RFPercentage(2)}px ${RFPercentage(0)}px;
    border-bottom-color: ${({ theme }) => theme.colors.primary} ;
    border-bottom-width: 0.5px;
`;
export const TypesCompetition = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: ${RFValue(300)}px; 
    margin-bottom: ${RFPercentage(1)}px;
`;
export const NumberOfMembers = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;
export const TypeSport = styled.Text`
    width: 80%;
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-bottom: ${RFPercentage(2)}px;
`;

export const IconStar = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const IconEdit = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(45)}px;
    margin: ${RFValue(5)}px;
    color: ${({ theme }) => theme.colors.primary};
    margin-left: ${RFPercentage(37)}px;
`;

export const Level = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const MoreCompetition = styled.Text``;

export const NameCompetition = styled.Text`
    font-size: ${RFValue(17)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const DateCompetition = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;