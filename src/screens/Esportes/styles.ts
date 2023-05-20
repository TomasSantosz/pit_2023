import styled from 'styled-components/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from "react-native";


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


export const SportName = styled.Text`
    margin-top: ${RFValue(50)}px;
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    height: 100%;
`;

export const ContentCompetitions = styled.View`
    width: 100% ;
    height: ${RFValue(430)}px ;
    border-radius: 15px;
    padding: ${RFValue(0)}px ${RFValue(25)}px ${RFValue(0)}px ${RFValue(25)}px ;
    margin-bottom: ${RFValue(20)}px;
`;

export const SingleCompetitions = styled(TouchableOpacity)`
    margin-top: ${RFValue(7)}px;
    width: 100%;    
    border-bottom-color: ${({ theme }) => theme.colors.primary} ;
    border-bottom-width: 0.5px;
    padding: ${RFValue(7)}px;
`;

export const TypesCompetition = styled.View`
    flex-direction: row;
    width: 100%;
    height: ${RFValue(40)}px;
    justify-content: center;
    align-items: center;   
`;

export const NameCompetition = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
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

export const Content = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: column;
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
