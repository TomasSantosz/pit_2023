import { TextInput } from "react-native";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
    width: 100%;
    padding: 16px 18px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    background-color: ${({ theme }) => theme.colors.background_card};
    border-radius: 15px;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.text_geral};
`;