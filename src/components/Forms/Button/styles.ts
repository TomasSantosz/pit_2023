import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
    width: 90%;
    padding: 16px 18px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 15px;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.text_geral};;
    align-items: center;

`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;