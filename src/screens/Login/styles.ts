import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};

    width: 100%;
    height: ${RFValue(113)}px;

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    
    font-family: ${({ theme }) => theme.fonts.bold};
`;
export const TextRegister = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Form = styled.View`
    flex: 1;
    width: 100%;
    padding-top: ${RFValue(24)}px;
    align-items: center;
    justify-content: space-between;

`;

export const Fields = styled.View`
    width: 100%;
`;

export const TextSoftware = styled.Text`
    font-size: ${RFValue(46)}px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
    padding: 40px 0px;
`;