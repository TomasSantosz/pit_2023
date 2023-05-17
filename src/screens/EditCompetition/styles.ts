import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    width: 100%;
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

export const Form = styled.View`
    flex: 1;
    padding-top: ${RFValue(24)}px;
    align-items: center;
    justify-content: space-between;
    width: 350px;

`;

export const Fields = styled.View`
    
    width: 100%;
`;

export const TextSoftware = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
    text-align: center;
    margin-bottom: 10px;
`;

export const Close = styled.TouchableOpacity`


`;

//Modal DATE
export const ContainerDate = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary_light};
`;

export const ContenteDate = styled.View`
    padding: 5px;
    flex-direction: column;
    justify-content: space-around;
    width: 350px;
    border-radius: 20px;
    height: 450px;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const DateView = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 18px;
    
    
    background-color: ${({ theme }) => theme.colors.background_card};
    border-radius: 15px;
    margin-bottom: 30px;
    
`;

export const DateText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_geral};
    font-size: ${RFValue(14)}px;
`;