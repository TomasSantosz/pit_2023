import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(20)}px;
    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: center; 

    border-bottom-left-radius: ${RFValue(40)}px;
    border-bottom-right-radius: ${RFValue(40)}px;
`;

export const Title = styled.Text`
    margin-top: ${RFPercentage(5)}px;
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TextSoftware = styled.Text`
    font-size: ${RFValue(46)}px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-top: ${RFPercentage(5)}px;
`;

export const Fields = styled.View`
    width: 95%;
    text-align: center;
    align-items: center;
`;

export const Form = styled.View`
    flex: 1;
    width: 100%;
    padding-top: ${RFPercentage(5)}px;
    align-items: center;
    justify-content: space-between;

`;

export const TextRegister = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;