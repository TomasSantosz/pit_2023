import React from 'react';

import { 
    Container, Header, Title, 
    GeneroOption, Icon, Name, 
    Separator, Footer
} from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../components/Forms/Button';
const generos = [
    {key: 'Masculino', name: 'Masculino', icon: 'user', color: '#c4c4c4'},
    {key: 'Feminino', name: 'Feminino', icon: 'user', color: '#c4c4c4'},
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
            <Header>
                <Title>Genero</Title>
            </Header>
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

            <Footer>
                <Button title="selecionar" 
                onPress={closeSelectGenero}
                />
            </Footer>
        </Container>
    )
}