import styled from 'styled-components/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';



export const Container = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const ContentCompetitions = styled.View`
    
    background-color: ${({ theme }) => theme.colors.background_card};

    width: ${RFValue(320)}px ;
    height: ${RFValue(450)}px ;
    border-radius: 15px;
    padding: 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;    
`;
export const NameCompetitions = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    //background-color: green;
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.bold};

    justify-content: center;
    align-items: flex-end;
    margin-bottom: 20px;
`;
export const SingleCompetitions = styled.View`
    margin-top: 10px;
    width: ${RFValue(280)}px ;
    
    
    //background-color: green;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;   
    margin-bottom: 10px;
    border-bottom-color: ${({ theme }) => theme.colors.primary} ;
    border-bottom-width: 1px;
    padding-bottom: 5px;
`;

export const TypesCompetition = styled.View`
    flex-direction: row;
    width: 100% ;
    justify-content: space-between;
    align-items: flex-start;
    
    
`;
export const NameCompetition = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TypeSport = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const DateCompetition = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const NumberOfMembers = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const MoreCompetition = styled.Text`

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
    border-radius: 50px;
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
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const IconStar = styled(MaterialIcons)`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.primary};
`;
