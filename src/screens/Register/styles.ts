import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape}; 
`;

export const Header = styled.View`
    width: 100%;
    flex: 0.2;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 15px;
    justify-content: center;
    align-items: center; 

    border-bottom-left-radius: ${RFValue(40)}px;
    border-bottom-right-radius: ${RFValue(40)}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TextSoftware = styled.Text`
    font-size: ${RFValue(46)}px;
    margin-bottom: 20%;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContentForm = styled.View`
    flex: 0.8;
    width: 100%;
    padding: 0px 25px 0px 25px;
`;

export const Fields = styled.View`
    text-align: center;
    align-items: center;
    width: 100%;
`;

export const Form = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;


