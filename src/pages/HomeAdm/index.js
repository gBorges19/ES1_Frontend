import React, {useState, useEffect}  from 'react';
import * as H from "./styles";
import Add from "../../assets/Add.png";
import Logo from '../../assets/L.png';
import api from "../../api";

function HomeAdm() {


    let today = new Date().toISOString().slice(0, 10)

    const[rua, setRua] = useState('');
    const[bairro, setBairro] = useState('');
    const[cidade, setCidade] = useState('');
    const[estado, setEstado] = useState('')

    const[serviceCount, setServiceCount] = useState([0])
    const[produtCount, setProdutCount] = useState([0])

    const[nomeCliente, setNomeCliente] = useState('')
    const[cpfCliente, setCpfCliente] = useState('')
    const[cepCliente, setCepCliente] = useState('')
    const[ruaCliente, setRuaCliente] = useState('')
    const[numeroCliente, setNumeroCliente] = useState('')
    const[bairroCliente, setBairroCliente] = useState('')
    const[cidadeCliente, setCidadeCliente] = useState('')
    const[ufCliente, setUfCliente] = useState('')
    const[complementoCliente, setComplementoCliente] = useState('')
    const[fonesCliente, setFonesCliente] = useState([])
    const[emailsCliente, setEmailsCliente] = useState([])

    const[nomeVeiculo, setNomeVeiculo] = useState('')
    const[modeloVeiculo, setModeloVeiculo] = useState('')
    const[marcaVeiculo, setMarcaVeiculo] = useState('')
    const[placaVeiculo, setPlacaVeiculo] = useState('')
    const[kmVeiculo, setKmVeiculo] = useState(0.00)

    const[servicos, setServicos] = useState([])
    const[produtos, setProdutos] = useState([])
    const[quantidadeProduto, setQuantidadeProduto] = useState(1)



/*
    const checkCEP = (e) => {
        if (!e.target.value) return; 
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep)
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            console.log(data);
            setRua(data.logradouro);
            setBairro(data.bairro);
            setCidade(data.localidade);
            setEstado(data.uf);
        }).catch((err) => console.log(err));
    }
 */

    async function submitForm(){


            const ufResponse = await api.post('unidade_federativa',{

                nomeUnidadeFederativa: ufCliente

            })

            const logradouroResponse = await api.post('logradouro',{

                nomeLogradouro: ruaCliente

            })

            const bairroResponse = await api.post('bairro',{

                nomeBairro: bairroCliente

            })

            const cidadeResponse = await api.post('cidade',{

                nomeCidade: cidadeCliente,
                unidadeFederativa: {
                    idUnidadeFederativa: ufResponse.data.idUnidadeFederativa
                }

            }) //.catch((error) => console.log( error.response.request ) );

            const enderecoResponse = await api.post('endereco',{

                cep: cepCliente,
                cidade: {
                    idCidade: cidadeResponse.data.idCidade
                },
                bairro: {
                    idBairro: bairroResponse.data.idBairro
                },
                logradouro:{
                    idLogradouro: logradouroResponse.data.idLogradouro
                }

            })

            const clienteResponse = await api.post('cliente',{

                nomeCliente: nomeCliente,
                cpfCliente: cpfCliente,
                numCasaCliente: numeroCliente,
                complementoCasaCliente: complementoCliente,
                endereco: {
                    idEndereco: enderecoResponse.data.idEndereco
                }

            })

            const marcaResponse = await api.post('marca',{

                nomeMarca: marcaVeiculo

            })

            const veiculoResponse = await api.post('veiculo', {

                nomeVeiculo: nomeVeiculo,
                kmVeiculo: kmVeiculo,
                modelo: modeloVeiculo,
                placa: placaVeiculo,
                marca: {
                    idMarca: marcaResponse.data.idMarca
                }


            })

            const ordemResponse = await api.post('ordem_servico',{




            })

        alert("Ordem de Serviço Cadastrada");


    }

    useEffect(() => {
        async function getProdutos (){
            const produtosResponse = await api.get('produto');
            if(produtosResponse.data){
                setProdutos(produtosResponse.data)
                console.log(produtosResponse.data)
            }
        }
        getProdutos();
    },[])

    return(
        

        <H.GlobalContainer>
                <H.Header>
                    <H.LogoImage src={Logo}/>
                    <H.ButtonHeader href="/adm">CADASTRAR OS</H.ButtonHeader>
                    <H.ButtonHeader href="/adm/ordens">ORDENS DE SERVIÇO</H.ButtonHeader>
                    <H.ButtonHeader href="/adm/cadastro" >CADASTRAR ITENS</H.ButtonHeader>
                    <H.ButtonHeader href="/">WEBSITE</H.ButtonHeader>
                </H.Header>
            <H.Title>CADASTRAR ORDEM DE SERVIÇO</H.Title>

                <H.FormContainer>

                    <H.RowContainer>
                        <H.TextInput>Data OS:</H.TextInput>
                        <H.InputMaior type="date" value={today}/>
                        <H.Checkbox type="checkbox"/>
                        <H.TextInput>Já Aprovada?</H.TextInput>
                    </H.RowContainer>

                    <H.CustomerContainer>
                        <H.TitleContainer>Dados do Cliente:</H.TitleContainer>
                        <H.RowContainer>
                            <H.TextInput>Nome Cliente:</H.TextInput>
                            <H.InputMaior type="text" onChange = {(event) => {setNomeCliente(event.target.value)}}/>
                            <H.TextInput>CPF:</H.TextInput>
                            <H.InputMaior type="number" onChange = {(event) => {setCpfCliente(event.target.value)}}/>
                        </H.RowContainer>
                        <H.RowContainer>
                            <H.TextInput>CEP:</H.TextInput>
                            <H.InputMedio onChange = {(event) => {setCepCliente(event.target.value)}}/>
                            <H.TextInput>Rua:</H.TextInput>
                            <H.InputMaior onChange = {(event) => {setRuaCliente(event.target.value)}}/>
                            <H.TextInput>Nro:</H.TextInput>
                            <H.InputMenor onChange = {(event) => {setNumeroCliente(event.target.value)}}/>
                            <H.TextInput>Bairro:</H.TextInput>
                            <H.InputMaior onChange = {(event) => {setBairroCliente(event.target.value)}}/>
                        </H.RowContainer>
                        <H.RowContainer>
                            <H.TextInput>Cidade:</H.TextInput>
                            <H.InputMedio onChange = {(event) => {setCidadeCliente(event.target.value)}}/>
                            <H.TextInput>UF:</H.TextInput>
                            <H.InputMenor onChange = {(event) => {setUfCliente(event.target.value)}}/>
                            <H.TextInput>Complemento:</H.TextInput>
                            <H.InputMedio onChange = {(event) => {setComplementoCliente(event.target.value)}}/>
                        </H.RowContainer>
                        <H.RowContainer>
                            <H.TextInput>Fone(s):</H.TextInput>
                            <H.InputMedio/>
                            <H.TextInput>,</H.TextInput>
                            <H.InputMedio/>
                            <H.TextInput>,</H.TextInput>
                            <H.InputMedio/>
                        </H.RowContainer>
                        <H.RowContainer>
                            <H.TextInput>Email(s):</H.TextInput>
                            <H.InputMaior/>
                            <H.TextInput>,</H.TextInput>
                            <H.InputMaior/>
                        </H.RowContainer>
                    </H.CustomerContainer>

                    <H.CarContainer>
                        <H.TitleContainer>Dados do Veículo:</H.TitleContainer>
                        <H.RowContainer>
                            <H.TextInput>Nome Veículo:</H.TextInput>
                            <H.InputMedio onChange = {(event) => {setNomeVeiculo(event.target.value)}}/>
                            <H.TextInput>Modelo:</H.TextInput>
                            <H.InputMedio onChange = {(event) => {setModeloVeiculo(event.target.value)}}/>
                            <H.TextInput>Marca:</H.TextInput>
                            <H.InputMedio onChange = {(event) => {setMarcaVeiculo(event.target.value)}}/>
                            <H.TextInput>Placa:</H.TextInput>
                            <H.InputMedio onChange = {(event) => {setPlacaVeiculo(event.target.value)}}/>
                            <H.TextInput>Km do veículo:</H.TextInput>
                            <H.InputMedio onChange = {(event) => {setKmVeiculo(event.target.value)}}/>
                        </H.RowContainer>
                    </H.CarContainer>

                    <H.ServicesContainer>
                        <H.RowContainer>
                        <H.TitleContainer>Serviços Realizados</H.TitleContainer>
                            <H.AddButton type="button" onClick={() => {
                                setServiceCount([...serviceCount, serviceCount.at(-1)+1])
                            }}><img src={Add} alt="Adicionar Serviço" width="25px" height="25px"/></H.AddButton>
                        </H.RowContainer>
                        <H.RowContainer>
                            <H.TextInputServices>Cod.Serviço</H.TextInputServices>
                            <H.TextInputServices>Tipo Serviço</H.TextInputServices>
                            <H.TextInputServices>Valor Mão de Obra</H.TextInputServices>
                        </H.RowContainer>
                        { serviceCount.map( (item) => {
                            return(
                                <H.RowContainer key={item}>
                                    <H.InputMedio/>
                                    <H.InputSelect>
                                        <option>Troca de Bateria</option>
                                        <option>Lavagem Especial</option>
                                    </H.InputSelect>
                                    <H.InputMedio/>
                                    <H.TrashButton
                                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="4" y1="7" x2="20" y2="7" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                    </H.TrashButton>
                                </H.RowContainer>
                            )
                            })
                        }
                    </H.ServicesContainer>

                    <H.ServicesContainer>
                        <H.RowContainer>
                            <H.TitleContainer>Produtos Utilizados</H.TitleContainer>
                            <H.AddButton type="button" onClick={() => {
                                setProdutCount([...produtCount, produtCount.at(-1)+1])
                            }}><img src={Add} alt="Adicionar Serviço" width="25px" height="25px"/></H.AddButton>
                        </H.RowContainer>
                        <H.RowContainer>
                            <H.TextInputServices>Cod.Produto</H.TextInputServices>
                            <H.TextInputServices>Nome Produto</H.TextInputServices>
                            <H.TextInputServices>Qtde</H.TextInputServices>
                            <H.TextInputServices>Valor Item</H.TextInputServices>
                            <H.TextInputServices>Total</H.TextInputServices>
                        </H.RowContainer>
                        { produtCount.map((item) => {
                            return(
                                <H.RowContainer key={item}>
                                    { produtos.map((item) => {
                                        return (
                                            <H.InputMenor value={item.codProduto}/>
                                        )
                                    })}
                                    <H.InputSelect>
                                        { produtos.map((item) => {
                                            return (
                                                <option>{item.nomeProduto}</option>
                                            )
                                        })}
                                    </H.InputSelect>
                                    <H.InputMenor type='number' onChange = {(event) => {setQuantidadeProduto(event.target.value)}}/>
                                        { produtos.map((item) => {
                                            return (
                                                <H.InputMenor value={item.valorItem}/>
                                            )
                                        })}
                                    { produtos.map((item) => {
                                        return (
                                            <H.InputMenor value={item.valorItem * quantidadeProduto}/>
                                        )
                                    })}
                                    <H.TrashButton
                                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="4" y1="7" x2="20" y2="7" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                    </H.TrashButton>
                                </H.RowContainer>
                            )
                            })
                        }
                    </H.ServicesContainer>

                </H.FormContainer>


            <H.ButtonCadastro onClick={() => submitForm() }>Cadastrar</H.ButtonCadastro>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1250 240">
                <path fill="#22BABB" fillOpacity="1" d="M0,64L24,85.3C48,107,96,149,144,144C192,139,240,85,288,80C336,75,384,117,432,144C480,171,528,181,576,170.7C624,160,672,128,720,128C768,128,816,160,864,165.3C912,171,960,149,1008,154.7C1056,160,1104,192,1152,181.3C1200,171,1248,117,1296,80C1344,43,1392,21,1416,10.7L1440,0L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"/>
            </svg>



        </H.GlobalContainer>
        

    )
}


export default HomeAdm;