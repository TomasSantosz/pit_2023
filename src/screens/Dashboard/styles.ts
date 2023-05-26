import styled from 'styled-components/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
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
    width: 100%;
    flex: 0.20;
    margin-bottom: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;    
    flex-direction: row;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 5% 5% 5% 5%;
    flex-direction: row;
    align-items: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
`;

export const ContentCard = styled.View`
    flex: 0.8;
    padding: 0px 30px 0px 30px;
`;

export const Cards = styled.View`
    flex-direction: row;
    margin-bottom: 20px;
`;

export const User = styled.View`
    margin-left: ${RFPercentage(2)}px;
    width: ${RFPercentage(28)}px;
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const NivelName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Icon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.secundary};
`;
