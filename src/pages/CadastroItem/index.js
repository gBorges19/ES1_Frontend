import React, {useState} from 'react';
import Logo from '../../assets/L.png';
import * as C from "./styles";
import api from '../../api';

function CadastroItem() {

    const[nomeProduto, setNomeProduto] = useState('')
    const[valorProduto, setValorProduto] = useState(0.00)

    const[nomeServico, setNomeServico] = useState('')
    const[valorServico, setValorServico] = useState(0.00)

    async function criarProduto(){

        const produtosResponse = await api.post('produto',{

            nomeProduto: nomeProduto,
            valorItem: valorProduto

        })

        alert("Produto Cadastrado!");
    }

    async function criarServico(){

        const servicosResponse = await api.post('tipo_servico',{

            nomeTipoServico: nomeServico,
            valorMaoDeObra: valorServico

        })

        alert("Serviço Cadastrado!");

    }

    return (
        <C.GlobalContainer>
            <C.Header>
                <C.LogoImage src={Logo}/>
                <C.ButtonHeader href="/adm">CADASTRAR OS</C.ButtonHeader>
                <C.ButtonHeader href="/adm/ordens">ORDENS DE SERVIÇO</C.ButtonHeader>
                <C.ButtonHeader href="/adm/cadastro" >CADASTRAR ITENS</C.ButtonHeader>
                <C.ButtonHeader href="/">WEBSITE</C.ButtonHeader>
            </C.Header>
            <C.Title>CADASTRAR PRODUTO</C.Title>
            <C.ContainerCadastro>
                <C.RowContainer>
                    <C.TextoAlto>Nome do Produto</C.TextoAlto>
                    <C.InputMaior onChange = {(event) => {setNomeProduto(event.target.value)}}/>
                </C.RowContainer>
                <C.RowContainer>
                    <C.TextoAlto>Valor do Produto: R$</C.TextoAlto>
                    <C.InputMenor onChange = {(event) => {setValorProduto(event.target.value)}}/>
                </C.RowContainer>
                <C.ButtonCadastro onClick={() => criarProduto() }>Adicionar Produto</C.ButtonCadastro>
            </C.ContainerCadastro>
            <C.Title>CADASTRAR SERVIÇO</C.Title>
            <C.ContainerCadastro>
                <C.RowContainer>
                    <C.TextoAlto>Tipo de Serviço:</C.TextoAlto>
                    <C.InputMaior  onChange = {(event) => setNomeServico(event.target.value)}/>
                </C.RowContainer>
                <C.RowContainer>
                    <C.TextoAlto>Valor da Mão de Obra: R$</C.TextoAlto>
                    <C.InputMenor onChange = {(event) => {setValorServico(event.target.value)}}/>
                </C.RowContainer>
                <C.ButtonCadastro  onClick={() => criarServico() }>Adicionar Serviço</C.ButtonCadastro>
            </C.ContainerCadastro>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1250 240">
                <path fill="#22BABB" fillOpacity="1" d="M0,64L24,85.3C48,107,96,149,144,144C192,139,240,85,288,80C336,75,384,117,432,144C480,171,528,181,576,170.7C624,160,672,128,720,128C768,128,816,160,864,165.3C912,171,960,149,1008,154.7C1056,160,1104,192,1152,181.3C1200,171,1248,117,1296,80C1344,43,1392,21,1416,10.7L1440,0L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"/>
            </svg>
        </C.GlobalContainer>
        

    )

}

export default CadastroItem;