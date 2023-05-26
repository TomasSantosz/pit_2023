import React, { useEffect, useState} from 'react';
import { api } from '../../services/api';
import { 
    Container, Header, Title, 
    EsporteOption, Icon, Name, 
    Separator, Footer, Content, ContentFlatList
} from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../components/Forms/Button';

interface Esporte {
    Regras: string;
    _id: string;
    nome: string;
}

interface Props{
    esporte: Esporte;
    setEsporte: (esporte: Esporte) => void; 
    closeSelectEsporte: () => void;
}

export function ModalEsportes({
    esporte,
    setEsporte,
    closeSelectEsporte   
}: Props){
    const [esportes, setEsportes] = useState<any>({
        nome: "",
        _id: "",
        Regras: ""
    });
    function handleEsporteSelect(esporte: Esporte){
        setEsporte(esporte);
    }

    useEffect(() => {
        async function fetchEsportes() {
          const response = await api.get('/Esportes');
          setEsportes(response.data);
        }
        fetchEsportes();
    },[]); 
      
    return(
        <Container>
            <Content>
            <Header>
                <Title>Esportes</Title>
            </Header>
            <ContentFlatList>
            <FlatList 
                data={esportes}
                style={{flex: 1, width: '100%'}}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={(item)=> {
                    return <Separator />              
                }}
                renderItem={({ item})=>{
                    return  item.nome && (
                        <EsporteOption key={item._id}
                            onPress={()=> handleEsporteSelect(item)}
                            isActive={esporte.nome === item.nome}
                        >
                            <Name>{item.nome}</Name>
                        </EsporteOption>
                    )
                }}                
            />
            </ContentFlatList>
                <Button title="selecionar" 
                onPress={closeSelectEsporte}
                />
            </Content>
        </Container>
    )
}