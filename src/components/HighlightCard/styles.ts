import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.background_card};

    width: ${RFValue(150)}px ;
    height: ${RFValue(176)}px ;
    border-radius: 15px;
    margin-right: 20px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const Icon = styled(Feather)`
    font-size: ${RFValue(73)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};  
`;