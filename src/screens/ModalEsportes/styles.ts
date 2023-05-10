import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';

interface CategoryProps{
    isActive: boolean;
}
export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_card};
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.background_card};
    width: 100%;
    height: ${RFValue(113)}px;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_geral};
    font-size: ${RFValue(18)}px;
`;

export const EsporteOption = styled.TouchableOpacity<CategoryProps>`
    width: 100%;
    padding:${RFValue(15)}px;
    flex-direction: row;
    align-items: center;

    background-color: ${({ isActive }) => isActive ? theme.colors.primary : theme.colors.background_card};
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

`;
export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: 10px;
`;

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
`;


export const Footer = styled.View`
    width: 100%;
    align-items: center;
    padding: 24px;
`;