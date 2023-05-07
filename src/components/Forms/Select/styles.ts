import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 18px;
    
    
    background-color: ${({ theme }) => theme.colors.background_card};
    border-radius: 15px;
    margin-bottom: 30px;
    
`;

export const Option = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_geral};
    font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text_geral};
`;