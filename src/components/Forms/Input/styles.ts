import { TextInput } from "react-native";
import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput).attrs({
    placeholderTextColor: "#555555"
  })`
    width: 100%;
    padding: 16px 18px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    border-radius: 15px;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.text_geral};
    border-bottom-color: ${({ theme }) => theme.colors.primary} ;
    border-bottom-width: 0.5px;
`;