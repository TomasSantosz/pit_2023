import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
    width: 100%;
    flex: 0.2;
    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: center; 

    border-bottom-left-radius: ${RFValue(40)}px;
    border-bottom-right-radius: ${RFValue(40)}px;
`;
export const Form = styled.View`
    flex: 0.8;
    width: 90%;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TextSoftware = styled.Text`
    font-size: ${RFValue(46)}px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Fields = styled.View`
    align-items: center;
`;

export const TextRegister = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;