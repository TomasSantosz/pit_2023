import styled from 'styled-components/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';

interface CategoryProps{
    isActive: boolean;
}
export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;
export const Content = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
    justify-content: space-between;
    align-items: center; 
`;

export const Header = styled.View`
    width: 100%;
    flex: 0.25;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 15px;

    justify-content: center;
    align-items: center; 

    border-bottom-left-radius: ${RFValue(40)}px;
    border-bottom-right-radius: ${RFValue(40)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.secundary};
    font-size: ${RFValue(26)}px;
`;

export const ContentFlatList = styled.View`
    flex: 0.75;
    width: 100%;
    padding: 0px 24px 0px 24px;

    align-items: center;
    justify-content: space-between;
`;
export const GeneroOption = styled.TouchableOpacity<CategoryProps>`
    width: 100%;
    padding:${RFValue(20)}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${({ isActive }) => isActive ? theme.colors.primary_light : theme.colors.shape};
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(16)}px;
`;
export const Icon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(20)}px;
    margin-right: 10px;
`;

export const Separator = styled.View`
    height: 0.5px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
`;


export const Footer = styled.View`
    width: 100%;
    align-items: center;
    padding: 24px;
`;
