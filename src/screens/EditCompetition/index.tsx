import React, {useEffect, useState} from 'react';
import moment from 'moment';
import { Container, Header, Title, 
    Form, Fields, ContainerDate,ContenteDate, 
    TextSoftware,Close, DateView, DateText} from './styles';
import { 
    Modal,
    ScrollView,
    Platform,
    View,
} from 'react-native';
import { useAuth } from '../../contexts/auth';
import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'
import { Select } from '../../components/Forms/Select';
import { ModalEsportes } from '../ModalEsportes';
import { api } from '../../services/api';
import DatePicker, {getToday, getFormatedDate} from 'react-native-modern-datepicker';
import { useNavigation } from '@react-navigation/native';
import { 
    Alert
} from 'react-native';
interface Route{
    route:{
      params: {
        _id: string;
      };
    }
  }
export function EditarCompetition({ route }:Route){
    const navigation = useNavigation();
    const [openDateModalInicio, setOpenDateModalInicio ] = useState(false);
    const [openDateModalTermino, setOpenDateModalTermino] = useState(false);
    
    const [dataInicio, setOpenDateInicio ] = useState<Date>(new Date(Date.now()));
    const [dataTermino, setOpenDateTermino ] = useState<Date>(new Date(Date.now()));
    const [timeInicio, setOpenTimeInicio ] = useState('00:00');
    const [timeTermino, setOpenTimeTermino ] = useState('00:00');

    const [esporteModal, setEsporteModal] = useState(false);
    const [nome, onChangeTextNome] = useState("");
    const [descricao, onChangeTextDescricao] = useState("");
    const {signOut, user} = useAuth();
    const [numeroParticipantes, onChangeTextNumeroParticipantes] = useState<any>(0);
    const [local, onChangeTextLocal] = useState("");
    const [competition, setCompetition] = useState(null);

    const [esporte, setEsporte] = useState({
        nome: "Esporte *",
        _id: '',
        Regras: ''       
    });
    
    const today = new Date();
        const startDate = getFormatedDate(new Date(today.setDate(today.getDate())), "YYYY/MM/DD");
        const endDate = getFormatedDate(new Date(new Date(dataInicio).setDate(new Date(dataInicio).getDate() + 1)), 'YYYY/MM/DD');

    useEffect(()=>{
        api.get(`/competicoes/${route.params._id}`).then((response)=>{
            const dataInicioSplit = response.data.DataInicio.split('T')
            const dataTerminoSplit = response.data.Datatermino.split('T')
            setOpenDateInicio(moment(new Date(dataInicioSplit[0])).format("MM/DD/YYYY"))
            setOpenDateTermino(moment(new Date(dataTerminoSplit[0])).format("MM/DD/YYYY"))
            setOpenTimeInicio(dataInicioSplit[1].substring(0,5))
            setOpenTimeTermino(dataTerminoSplit[1].substring(0,5))
            setCompetition(response.data);
            onChangeTextNome(response.data.nome)
            onChangeTextNumeroParticipantes(response.data.NumPart)
            onChangeTextLocal(response.data.Local)
            onChangeTextDescricao(response.data.descricao)
            setEsporte({nome: response.data.esporte.nome, _id: response.data.esporte._id, Regras: response.data.esporte.Regras})
        }).catch((err)=>{
            console.log('eeror')
        })
    },[])
    
    
    function handleCloseSelectEsporte(){
        setEsporteModal(!esporteModal);
        
    }

    function EditarCompetition(){
        const esporteId = esporte._id;
        const compepe = {
            nome,
            esporte: esporteId,
            criador: user?._id,
            descricao,
            NumPart: Number(numeroParticipantes),
            Local: local,
            DataInicio: `${moment(new Date(dataInicio)).format("MM/DD/YYYY")} ${timeInicio}`,
            Datatermino: `${moment(new Date(dataTermino)).format("MM/DD/YYYY")} ${timeTermino}`
        }
        console.log(compepe)
        api.put(`/competicoes/${competition._id}`,compepe)
        .then(async(response) => {
            Alert.alert('Editado com sucesso!', `A competição ${compepe.nome} foi editada.`);
            return response.data;
        }).catch(err => {
            return Alert.alert('Falha', 'Falha ao cadastrar!');
        });
    }

    function handleDateInicioChange(propDate:string){
        setOpenDateInicio(new Date(moment(new Date(propDate)).format("MM/DD/YYYY HH:mm")))
        
    }

    function handleDateTerminoChange(propDate:string){
        setOpenDateTermino(new Date(moment(new Date(propDate)).format("MM/DD/YYYY HH:mm")))
    }

    function handleTimeInicioChange(propDate:string){
        setOpenTimeInicio(propDate);
        console.log(dataInicio)
    }

    function handleTimeTerminoChange(propDate:string){
        setOpenTimeTermino(propDate);
    }

    function handleDateInicioPress(){
        setOpenDateModalInicio(!openDateModalInicio);
    }
    function handleDateTerminoPress(){
        setOpenDateModalTermino(!openDateModalTermino);
    }
    return (
        <Container behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={20}>
            <Header>
                <Title>Editar Competição</Title>   
            </Header>
            <ScrollView>
                <Form>
                    <Fields>
                        <Input 
                            placeholder='Nome *'
                            defaultValue={nome}
                            onChangeText={(text)=>{
                                onChangeTextNome(text)
                            }}
                            autoCapitalize='words'
                            autoCorrect={false} 
                        />
                        <Input 
                            placeholder='Número de Participantes *'
                            defaultValue={String(numeroParticipantes)}
                            onChangeText={(text)=>{
                                onChangeTextNumeroParticipantes(text)
                            }}
                            autoCapitalize='none'
                            keyboardType='numeric'
                            autoCorrect={false}  
                        />
                        <Input 
                            placeholder='Descricao *'
                            onChangeText={(text)=>{
                                onChangeTextDescricao(text)
                            }}
                            defaultValue={descricao}
                            autoCorrect={true}  
                        />
                        <Select 
                            title={esporte.nome}
                            onPress={handleCloseSelectEsporte}  
                        />
                        <DateView onPress={handleDateInicioPress}>
                            <DateText>{moment(new Date(dataInicio)).format("DD/MM/YYYY")} {timeInicio}</DateText>
                        </DateView>

                        <DateView onPress={handleDateTerminoPress}>
                            <DateText>{moment(new Date(dataTermino)).format("DD/MM/YYYY")} {timeTermino}</DateText>
                        </DateView>
                        
                        <Input 
                            placeholder='Local *'
                            defaultValue={local}
                            onChangeText={(text)=>{
                                onChangeTextLocal(text)
                            }}
                            autoCorrect={false} 
                            autoCapitalize='none'
                        />
                    </Fields>
                    <Button title="Editar Competição" onPress={EditarCompetition} />
                </Form>
                <Modal visible={esporteModal}>
                    <ModalEsportes 
                        esporte={esporte}
                        setEsporte={setEsporte}
                        closeSelectEsporte={handleCloseSelectEsporte}                
                    />
                </Modal>

                <Modal 
                    visible={openDateModalInicio}
                    transparent={true}
                    animationType='slide'
                >
                    <ContainerDate>
                        <ContenteDate>                            
                            <DatePicker
                                mode='datepicker'
                                selected={'15/05/2023','03:20'}                                
                                minimumDate={startDate}
                                onTimeChange={handleTimeInicioChange}
                                onDateChange={handleDateInicioChange}
                            />
                            <Close onPress={handleDateInicioPress}>
                                <TextSoftware>Fechar</TextSoftware>
                            </Close>
                        </ContenteDate>
                    </ContainerDate>
                </Modal>
                <Modal 
                    visible={openDateModalTermino}
                    transparent={true}
                    animationType='slide'
                >
                    <ContainerDate>
                        <ContenteDate>                            
                            <DatePicker
                                mode='datepicker'
                                minimumDate={String(moment(new Date(dataInicio)).format("YYYY/MM/DD"))}
                                maximumDate={endDate}
                                onTimeChange={handleTimeTerminoChange}
                                onDateChange={handleDateTerminoChange}
                            />
                            <Close onPress={handleDateTerminoPress}>
                                <TextSoftware>Fechar</TextSoftware>
                            </Close>
                        </ContenteDate>
                    </ContainerDate>
                </Modal>
            </ScrollView>  
        </Container>
    );
}