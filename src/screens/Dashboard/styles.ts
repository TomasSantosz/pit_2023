import styled from 'styled-components/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;    
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View`
    padding: ${RFPercentage(2)}px;
    flex-direction: row;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(25)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: flex-end;    
    flex-direction: row;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    margin-bottom: ${RFPercentage(5)}px;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 ${RFPercentage(3)}px ${RFPercentage(4)}px ${RFPercentage(3)}px;
    flex-direction: row;
    justify-content: space-between;
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
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.secundary};
`;
