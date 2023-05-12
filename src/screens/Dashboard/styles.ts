import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';



export const Container = styled.View`
    flex: 1;
    
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View`
    padding: 15px;
    flex-direction: row;
`;
export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(25)}px;
    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: flex-end;
    
    flex-direction: row;
`;
export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 18px 24px 18px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Photo = styled.Image`
    width: ${RFValue(75)}px;
    height: ${RFValue(75)}px;
`;
export const User = styled.View`
    margin-left: 17px;
`;
export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const NivelName = styled.Text`
     color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.secundary};


`;
