import React from 'react';

import { 
    Container, Header, Title, 
    GeneroOption, Icon, Name, 
    Separator, Footer, Content, ContentFlatList
} from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../components/Forms/Button';
const generos = [
    {key: 'Masculino', name: 'Masculino', icon: 'face-man-outline', color: '#c4c4c4'},
    {key: 'Feminino', name: 'Feminino', icon: 'face-woman-outline', color: '#c4c4c4'},
];
interface Genero {
    key: string;
    name: string;
}

interface Props{
    genero: Genero | any;
    setGenero: (genero: Genero) => void; 
    closeSelectGenero: () => void;
}

export function GeneroSelect({
    genero,
    setGenero,
    closeSelectGenero    
}: Props){
    function handleGeneroSelect(genero: Genero){
        setGenero(genero);
    }
    return(
        <Container>
            <Content>
            <Header>
                <Title>Genero</Title>
            </Header>
                <ContentFlatList>
                    <FlatList 
                        data={generos}
                        style={{flex: 1, width: '100%'}}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item})=>(
                            <GeneroOption
                                onPress={()=> handleGeneroSelect(item)}
                                isActive={genero.key === item.key}
                            >
                                <Icon name={item.icon} />
                                <Name>{item.name}</Name>
                            </GeneroOption>
                        )}
                        ItemSeparatorComponent={()=> <Separator />}
                    />
                    <Button title="selecionar" 
                    onPress={closeSelectGenero}
                    />
                </ContentFlatList>
            </Content>
        </Container>
    )
}