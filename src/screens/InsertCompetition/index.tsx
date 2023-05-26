import React, {useEffect, useState} from 'react';
import moment from 'moment';
import { Container, Header, Title, 
    Form, Fields, ContainerDate,ContenteDate, 
    TextSoftware,Close, DateView, DateText, SportSector, Back, IconBack, Content} from './styles';
import Axios from 'axios';
import { 
    Modal,
    ScrollView,
    Platform,
    View,
    ActivityIndicator
} from 'react-native';
import { useAuth } from '../../contexts/auth';
import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'
import { Select } from '../../components/Forms/Select';
import { ModalEsportes } from '../ModalEsportes';
import { api } from '../../services/api';
import DatePicker, {getToday, getFormatedDate} from 'react-native-modern-datepicker';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import { 
    Alert,
    TouchableWithoutFeedback,
    Keyboard, StatusBar
} from 'react-native';

interface Route{
    route:{
      params: {
        _id: string;
      };
    }
  }

export function InsertCompetition({ route }:Route){
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [competition, setCompetition] = useState<any>(null);

    const [openDateModalInicio, setOpenDateModalInicio ] = useState(false);
    const [openDateModalTermino, setOpenDateModalTermino] = useState(false);
    
    const [dataInicio, setOpenDateInicio ] = useState<any>(new Date(Date.now()));
    const [dataTermino, setOpenDateTermino ] = useState<any>(new Date(Date.now()));
    const [timeInicio, setOpenTimeInicio ] = useState('00:00');
    const [timeTermino, setOpenTimeTermino ] = useState('00:00');

    //form endereoo
    const [cep , setChangeCep] = useState('');
    const [numero, setNumero] = useState(0); 
    const [rua, setRua] = useState(''); 
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState("");
    const [complemento, setComplemento] = useState("");
    
    const [esporteModal, setEsporteModal] = useState(false);
    const [nome, onChangeTextNome] = useState("");
    const [descricao, onChangeTextDescricao] = useState("");
    const {signOut, user} = useAuth();
    const [numeroParticipantes, onChangeTextNumeroParticipantes] = useState<any>(0);
    const [local, onChangeTextLocal] = useState("");
    
    //Steps Formulários
    const [stepForm, setStepForm] = useState(1);
    function switchStep ( step:number ){
        setStepForm(step)
    }

    const [esporte, setEsporte] = useState({
        nome: "Esporte *",
        _id: '',
        Regras: ''       
    });
    
    const today = new Date();
    const startDate = getFormatedDate(new Date(today.setDate(today.getDate())), "YYYY/MM/DD");
    const endDate = getFormatedDate(new Date(new Date(dataInicio).setDate(new Date(dataInicio).getDate() + 1)), 'YYYY/MM/DD');

    useEffect(()=>{
        if(route.params._id){
            api.get(`/competicoes/${route.params._id}`).then((response)=>{
                const dataInicioSplit = response.data.DataInicio.split('T')
                const dataTerminoSplit = response.data.Datatermino.split('T')
                setOpenDateInicio(moment(dataInicioSplit[0]).format("MM/DD/YYYY"))
                setOpenDateTermino(moment(dataTerminoSplit[0]).format("MM/DD/YYYY"))
                setOpenTimeInicio(dataInicioSplit[1].substring(0,5))
                setOpenTimeTermino(dataTerminoSplit[1].substring(0,5))
                setCompetition(response.data);
                onChangeTextNome(response.data.nome)
                onChangeTextNumeroParticipantes(response.data.NumPart)
                onChangeTextLocal(response.data.Local)
                onChangeTextDescricao(response.data.descricao)
                setRua(response.data.Endereco.rua)
                setBairro(response.data.Endereco.bairro)
                setCidade(response.data.Endereco.cidade)
                setNumero(response.data.Endereco.numero)
                setComplemento(response.data.Endereco.complemento)
                setChangeCep(response.data.Endereco.cep)
                setEsporte({nome: response.data.esporte.nome, _id: response.data.esporte._id, Regras: response.data.esporte.Regras})
                setTimeout(function(){
                    setLoading(false); 
                  },100);
            }).catch((err)=>{
                console.log('eeror')
            })
        }        
    },[])
    
    if(route.params._id){
        if(loading){
            return (
                <View style={{flex: 1, backgroundColor: '#EBEBEB',justifyContent: 'center', alignItems: 'center'}}>
                    <Lottie source={require('../../assets/lottie/70493-loading-spinner.json')} autoPlay loop />
                </View>
            )
        } 
    }
    function handleCloseSelectEsporte(){
        setEsporteModal(!esporteModal);        
    }

    function openCompetition(){
        navigation.navigate('Competicoes');
    }


    function EditarCompetition(){
        const esporteId = esporte._id;
        const compepe = {
            nome,
            esporte: esporteId,
            criador: user?._id,
            descricao,
            NumPart: Number(numeroParticipantes),
            Endereco : {
                cep, 
                rua,
                numero: Number(numero),
                bairro,
                cidade,
                complemento,
            },
            DataInicio: `${moment(new Date(dataInicio)).format("MM/DD/YYYY")} ${timeInicio}`,
            Datatermino: `${moment(new Date(dataTermino)).format("MM/DD/YYYY")} ${timeTermino}`
        }
        console.log(compepe)
        api.put(`/competicoes/${competition?._id}`,compepe)
        .then(async(response) => {
            Alert.alert('Editado com sucesso!', `A competição ${compepe.nome} foi editada.`, [
                {text: 'ok', onPress: () => openCompetition()},
                {text: 'Cancelar'},
            ]);
            return response.data;
        }).catch(err => {
            return Alert.alert('Falha', 'Falha ao cadastrar!');
        });
    }

    function InserirCompetition(){
        if(!nome || !descricao || !numeroParticipantes || !rua || !bairro || !cidade ){
            return Alert.alert('Atenção', 'Preencha os campos OBRIGATÓRIOS (*)!');
        }

        if(Number(numeroParticipantes) <= 1){
            return Alert.alert('Atenção', 'Preencha o número de participantes tem que ser superior à um!');
        }

        if(esporte._id == ''){
            return Alert.alert('Atenção', 'Selecione o campo: ESPORTE.');
        }

        if(new Date(`${moment(new Date(dataInicio)).format("MM/DD/YYYY")} ${timeInicio}`) >= new Date(`${moment(new Date(dataTermino)).format("MM/DD/YYYY")} ${timeTermino}`)){
            return Alert.alert('Atenção', 'Selecione uma data e hora de termino posterior à de início');
        }
        const esporteId = esporte._id;
        const compepe = {
            nome,
            esporte: esporteId,
            criador: user?._id,
            descricao,
            NumPart: Number(numeroParticipantes),
            Endereco : {
                cep, 
                rua,
                numero,
                bairro,
                cidade,
                complemento,
            },
            DataInicio: `${moment(new Date(dataInicio)).format("MM/DD/YYYY")} ${timeInicio}`,
            Datatermino: `${moment(new Date(dataTermino)).format("MM/DD/YYYY")} ${timeTermino}`
        }
        console.log(compepe)
        api.post('/competicoes',compepe)
        .then(async(response) => {
            api.post('/competicoes/atleta',{
                idCompeticao: response.data._id, 
                  atletasArray:{
                  atleta: response.data.criador,
                  aprovado: true,
                }
            });
            Alert.alert('Cadastrado com sucesso!', `A competição ${compepe.nome} já está disponível`, [
                {text: 'ok', onPress: () => openCompetition()},
                {text: 'Cancelar'},
            ]);
            return response.data;
        }).catch(err => {
            console.log(err.request)
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container style={{ backgroundColor:"#555"}}> 
         <StatusBar  barStyle={'light-content'} backgroundColor={"#555"}/>
            <Content>
            <Header>
                <Title>{route.params._id ? "Editar Competição" : "Inserir Competição"}</Title>   
            </Header>
                {stepForm === 1 ? ( 
                <Form>
                    <Fields>
                        <Input 
                            placeholder='Nome *'
                            defaultValue={route.params._id && nome}
                            onChangeText={(text)=>{
                                onChangeTextNome(text)
                            }}
                            autoCapitalize='words'
                            autoCorrect={false} 
                        />
                        <SportSector>
                            <Input style={{width: '40%', textAlign: 'center'}}
                                placeholder='Nº Jogadores'
                                onChangeText={(text)=>{
                                    onChangeTextNumeroParticipantes(text)
                                }}
                                autoCapitalize='none'
                                defaultValue={route.params._id && String(numeroParticipantes)}
                                keyboardType='numeric'
                                autoCorrect={false}  
                            />
                            <Select 
                                title={esporte.nome}
                                onPress={handleCloseSelectEsporte}  
                            />
                        </SportSector>
                        <Input 
                            placeholder='Descrição *'
                            multiline
                            numberOfLines={2}
                            defaultValue={route.params._id && String(descricao)}
                            onChangeText={(text)=>{
                                onChangeTextDescricao(text)
                            }}
                            autoCorrect={true}  
                        />
                        <SportSector>
                            <DateView onPress={handleDateInicioPress} style={{width: '50%'}}>
                                <DateText>{moment(new Date(dataInicio)).format("DD/MM/YYYY")} {timeInicio}</DateText>
                            </DateView>

                            <DateView onPress={handleDateTerminoPress} style={{width: '50%'}}>
                                <DateText>{moment(new Date(dataTermino)).format("DD/MM/YYYY")} {timeTermino}</DateText>
                            </DateView>
                        </SportSector>
                    </Fields>
                    <Button title={"Próximo"} onPress={()=>switchStep(2)} />
                    </Form>
                ) : (
                    <Form>
                        <Back>
                            <IconBack onPress={()=>switchStep(1)} name="keyboard-backspace" />
                        </Back>
                        <Fields>                            
                            <SportSector>
                                <Input 
                                    style={{width: '50%'}}
                                    placeholder='CEP'
                                    defaultValue={route.params._id && String(cep)}
                                    onChangeText={(text)=>{
                                        setChangeCep(text)
                                        if(text.length >= 8){
                                            Axios.get(`https://viacep.com.br/ws/${text}/json/`)
                                            .then(response => {
                                                setRua(response.data.logradouro)
                                                setBairro(response.data.bairro)
                                                setCidade(response.data.localidade)
                                            })
                                            .catch(error => {
                                                return console.log(error);
                                            })
                                        }                                    
                                    }}
                                    autoCorrect={false} 
                                    autoCapitalize='none'
                                />
                                <Input 
                                    style={{width: '50%'}}
                                    placeholder='Número'
                                    defaultValue={String(cep != "" ? numero : 0)}
                                    onChangeText={(text)=>{
                                        setNumero(Number(text))
                                    }}
                                    autoCorrect={false} 
                                    autoCapitalize='none'
                                />
                            </SportSector>
                            <Input 
                                placeholder='Rua *'
                                defaultValue={String(cep != "" ? rua : "")}
                                onChangeText={(text)=>{
                                    setRua(text)
                                }}
                                autoCorrect={false} 
                                autoCapitalize='none'
                            />
                            <SportSector>
                                <Input 
                                    style={{width: '50%'}}
                                    placeholder='Bairro *'
                                    defaultValue={String(cep != "" ? bairro : "")}
                                    onChangeText={(text)=>{
                                        setBairro(text)
                                    }}
                                    autoCorrect={false} 
                                    autoCapitalize='none'
                                />
                                <Input 
                                    style={{width: '50%'}}
                                    placeholder='Cidade *'
                                    defaultValue={String(cep != "" ? cidade : "")}
                                    onChangeText={(text)=>{
                                        setCidade(text)
                                    }}
                                    autoCorrect={false} 
                                    autoCapitalize='none'
                                />
                            </SportSector>
                            {/* <Input 
                                placeholder='Local *'
                                defaultValue={route.params._id && String(local)}
                                onChangeText={(text)=>{
                                    onChangeTextLocal(text)
                                }}
                                autoCorrect={false} 
                                autoCapitalize='none'
                            /> */}
                            <Input 
                                placeholder='Complemento'
                                defaultValue={route.params._id && String(complemento)}
                                onChangeText={(text)=>{
                                    setComplemento(text)
                                }}
                                autoCorrect={false} 
                                autoCapitalize='none'
                            />
                        </Fields>
                        <Button title={route.params._id ? "Editar Competição" : "Inserir Competição"} onPress={route.params._id ? EditarCompetition : InserirCompetition} />
                    </Form>
                )}
               
                
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
                                selected={startDate}
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
                                selected={endDate}
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
            </Content>
        </Container>
        </TouchableWithoutFeedback>
    );
}