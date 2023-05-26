import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;
export const Content = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
    justify-content: space-between;
    align-items: center; 
`;
export const Header = styled.View`
    width: 100%;
    flex: 0.25;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 10px;

    justify-content: center;
    align-items: center; 

    border-bottom-left-radius: ${RFValue(40)}px;
    border-bottom-right-radius: ${RFValue(40)}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Form = styled.View`
    flex: 0.75;
    width:100%;
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
`;