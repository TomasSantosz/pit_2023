import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;
export const Content = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
    justify-content: center;
    align-items: center; 
`;
export const Header = styled.View`
    width: 100%;
    flex: 0.25;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 15px;

    justify-content: center;
    align-items: center; 

    border-bottom-left-radius: ${RFValue(40)}px;
    border-bottom-right-radius: ${RFValue(40)}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFPercentage(3)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Form = styled.View`
    align-items: center;
    width: 95%;
    flex: 0.75;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Fields = styled.View`    
    width: 100%;
`;

export const Back = styled.View`
    width: 100%;
    margin-left: 20px;
`;
export const IconBack = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(30)}px;
    width: 10%;
    color: ${({ theme }) => theme.colors.primary};
`;

export const SportSector = styled.View`    
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const TextSoftware = styled.Text`
    font-size: ${RFPercentage(2)}px;
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
    width:100%;
    
    border-radius: 15px;
    margin-bottom: 25%;
    
    border-bottom-color: ${({ theme }) => theme.colors.primary} ;
    border-bottom-width: 0.5px;    
`;

export const DateText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_geral};
    font-size: ${RFPercentage(2)}px;
`;