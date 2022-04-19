import React, {useEffect, useState} from 'react';
import * as H from "./styles";
//import Add from "../../assets/Add.png";
import Logo from '../../assets/L.png';
import api from "../../api";

function HomeAdm() {


    let today = new Date().toISOString().slice(0, 10)

    /*
    const[rua, setRua] = useState('');
    const[bairro, setBairro] = useState('');
    const[cidade, setCidade] = useState('');
    const[estado, setEstado] = useState('')
     */

    const[nomeCliente, setNomeCliente] = useState('')
    const[cpfCliente, setCpfCliente] = useState('')
    const[cepCliente, setCepCliente] = useState('')
    const[ruaCliente, setRuaCliente] = useState('')
    const[numeroCliente, setNumeroCliente] = useState('')
    const[bairroCliente, setBairroCliente] = useState('')
    const[cidadeCliente, setCidadeCliente] = useState('')
    const[ufCliente, setUfCliente] = useState('')
    const[complementoCliente, setComplementoCliente] = useState('')

    const[foneCliente, setFoneCliente] = useState('')
    const[foneClienteDois, setFoneClienteDois] = useState('')
    const[foneClienteTres, setFoneClienteTres] = useState('')

    const[emailCliente, setEmailCliente] = useState('')
    const[emailClienteDois, setEmailClienteDois] = useState('')

    const[nomeVeiculo, setNomeVeiculo] = useState('')
    const[modeloVeiculo, setModeloVeiculo] = useState('')
    const[marcaVeiculo, setMarcaVeiculo] = useState('')
    const[placaVeiculo, setPlacaVeiculo] = useState('')
    const[kmVeiculo, setKmVeiculo] = useState(0.00)

    const[servicos, setServicos] = useState([])
    const[produtos, setProdutos] = useState([])

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

        })

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

        async function cadastraTelefone(){

            if(foneCliente){

                const foneResponseOne = await api.post('telefone',{
                    numeroTelefone: foneCliente,
                    cliente:{
                        idCliente: clienteResponse.data.idCliente
                    }
                })

            }

            if(foneClienteDois){

                const foneResponseTwo = await api.post('telefone',{
                    numeroTelefone: foneClienteDois,
                    cliente:{
                        idCliente: clienteResponse.data.idCliente
                    }
                })

            }

            if(foneClienteTres){

                const foneResponseThree = await api.post('telefone',{
                    numeroTelefone: foneClienteTres,
                    cliente:{
                        idCliente: clienteResponse.data.idCliente
                    }
                })

            }

        }

        async function cadastraEmail(){

            if(emailCliente){

                const emailResponseOne = await api.post('email',{
                    email: emailCliente,
                    cliente:{
                        idCliente: clienteResponse.data.idCliente
                    }
                })

            }

            if(emailClienteDois){

                const emailResponseTwo = await api.post('email',{
                    email: emailClienteDois,
                    cliente:{
                        idCliente: clienteResponse.data.idCliente
                    }
                })

            }

        }

        await cadastraEmail()
        //await cadastraTelefone()

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

            dataOrdemServico: today,
            cliente:{
                idCliente : clienteResponse.data.idCliente
            },
            veiculo:{
                idVeiculo: veiculoResponse.data.idVeiculo
            },
            estado:{
                idEstado: 3
            }



        })

        for(const produto of produtos){
            if(produto.quantidade > 0){
                await cadastraItemProduto(produto,ordemResponse.data.nroOrdemDeServico)
            }
        }

        for(const servico of servicos){
            if(servico.quantidade > 0){
                await cadastraServico(servico,ordemResponse.data.nroOrdemDeServico)
            }
        }

        alert("Ordem de Serviço Cadastrada");


    }

    async function cadastraItemProduto(item, nroOrdemDeServico){

        const produtoResponse = await api.post('item_produto',{

            quantidadeProduto: item.quantidade,
            ordemDeServico:{
                nroOrdemDeServico: nroOrdemDeServico
            },
            produto:{
                codProduto: item.codProduto
            }


        })

    }

    async function cadastraServico(item, nroOrdemDeServico){

        const servicoResponse = await api.post('servico',{

            ordemDeServico:{
                nroOrdemDeServico: nroOrdemDeServico
            },
            tipoServico:{
                idTipoServico: item.idTipoServico
            }


        })

        console.log(servicoResponse)
    }


    useEffect(() => {
        async function getProdutos (){
            const produtosResponse = await api.get('produto');
            if(produtosResponse.data){
                const produtos = produtosResponse.data.map((item) => { return({...item, quantidade: 0})})
                setProdutos(produtosResponse.data)
                console.log(produtosResponse.data)
            }
        }
        getProdutos();
    },[])


    useEffect(() => {
        async function getServicos (){
            const servicosResponse = await api.get('tipo_servico');
            if(servicosResponse.data){
                const servicos = servicosResponse.data.map((item) => { return({...item, quantidade: 0})})
                setServicos(servicosResponse.data)
                console.log(servicosResponse.data)
            }
        }
        getServicos();
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
                </H.RowContainer>

                <H.CustomerContainer>
                    <H.TitleContainer>Dados do Cliente:</H.TitleContainer>
                    <H.RowContainer>
                        <H.TextInput>Nome Cliente:</H.TextInput>
                        <H.InputMaior type="text" onChange = {(event) => {setNomeCliente(event.target.value)}}/>
                        <H.TextInput>CPF:</H.TextInput>
                        <H.InputMaior onChange = {(event) => {setCpfCliente(event.target.value)}}/>
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
                        <H.InputMedio onChange = {(event) => {setFoneCliente(event.target.value)}}/>
                        <H.TextInput>,</H.TextInput>
                        <H.InputMedio onChange = {(event) => {setFoneClienteDois(event.target.value)}}/>
                        <H.TextInput >,</H.TextInput>
                        <H.InputMedio onChange = {(event) => {setFoneClienteTres(event.target.value)}}/>
                    </H.RowContainer>
                    <H.RowContainer>
                        <H.TextInput>Email(s):</H.TextInput>
                        <H.InputMaior onChange = {(event) => {setEmailCliente(event.target.value)}} />
                        <H.TextInput>,</H.TextInput>
                        <H.InputMaior onChange = {(event) => {setEmailClienteDois(event.target.value)}}/>
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
                        <H.TitleContainer>Produtos Utilizados</H.TitleContainer>
                    </H.RowContainer>
                    <H.RowContainer>
                        <H.TextInputServices>Cod.Produto</H.TextInputServices>
                        <H.TextInputServices>Nome do Produto</H.TextInputServices>
                        <H.TextInputServices>Valor do Produto</H.TextInputServices>
                        <H.TextInputServices>Quantidade</H.TextInputServices>
                        <H.TextInputServices>Total</H.TextInputServices>
                    </H.RowContainer>
                    { produtos.map( (item) => {

                        function getNum(val) {
                            if (isNaN(val)) {
                                return 0;
                            }
                            return val;
                        }

                        return(
                            <H.RowContainer key={item}>
                                <H.InputMedio value={item.codProduto}/>
                                <H.InputMaior value={item.nomeProduto}/>
                                <H.InputMedio defaultValue={0} value={item.valorItem}/>
                                <H.InputMenor type='number' defaultValue={0} onChange = {(event) => {
                                    const produtosAlterados = produtos.map((prod)=>{
                                        if(prod.codProduto===item.codProduto){
                                                return {...prod, quantidade: event.target.value};
                                            }else{
                                            return prod;
                                        }
                                    });
                                    setProdutos(produtosAlterados)}}/>
                                <H.Total>{getNum(item.valorItem * item.quantidade)} R$</H.Total>
                            </H.RowContainer>
                        )
                    })
                    }
                </H.ServicesContainer>

                <H.ServicesContainer>
                    <H.RowContainer>
                        <H.TitleContainer>Serviços Realizados</H.TitleContainer>
                    </H.RowContainer>
                    <H.RowContainer>
                        <H.TextInputServices>Cod.Serviço</H.TextInputServices>
                        <H.TextInputServices>Tipo Serviço</H.TextInputServices>
                        <H.TextInputServices>Valor Mão de Obra</H.TextInputServices>
                        <H.TextInputServices>Incluído?</H.TextInputServices>
                    </H.RowContainer>
                    { servicos.map( (item) => {
                        return(
                            <H.RowContainer key={item}>
                                <H.InputMedio value={item.idTipoServico}/>
                                <H.InputMaior value={item.nomeTipoServico}/>
                                <H.InputMedio value={item.valorMaoDeObra}/>
                                <H.InputMenor type='number' onChange = {(event) => {
                                    const servicosAlterados = servicos.map((serv)=>{
                                        if(serv.idTipoServico===item.idTipoServico){
                                            return {...serv, quantidade: event.target.value};
                                        }else{
                                            return serv;
                                        }
                                    });
                                    setServicos(servicosAlterados)}}/>
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