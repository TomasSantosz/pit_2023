import styled from 'styled-components/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from "react-native";

export const Container = styled.SafeAreaView`
    background-color: ${({ theme }) => theme.colors.primary};
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.shape};
`;
export const Header = styled.View`
    width: 100%;
    flex: 0.25;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 15px;

    justify-content: center;
    align-items: center; 

    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;

export const ContentCompetitions = styled.View`
    width: 100% ;
    flex: 0.75;
    padding: 0px 25px 0px 25px ;
`;

export const SingleCompetitions = styled(TouchableOpacity)`
    margin-top: 7px; 
    border-bottom-color: ${({ theme }) => theme.colors.primary} ;
    border-bottom-width: 0.5px;
    padding: 7px;
`;

export const SportName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
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
    font-family: ${({ theme }) => theme.fonts.medium};
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

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;
