import React, {useState, useEffect} from 'react';
import Logo from '../../assets/L.png';
import * as C from "./styles";
import Arrow from '../../assets/Arrow.png'
import api from "../../api";

function ConsultaAdm() {

    const[ordemServicos, setOrdemServicos] = useState([])

        useEffect(() => {
            async function getOrdens (){
                const ordemResponse = await api.get('ordem_servico/por_estado/Aprovado');
                if(ordemResponse.data){
                    setOrdemServicos(ordemResponse.data)
                    console.log(ordemResponse.data)
                }
            }
            getOrdens();
        },[])

    return (
        <C.GlobalContainer>
            <C.Header>
                <C.LogoImage src={Logo}/>
                <C.ButtonHeader href="/adm">CADASTRAR OS</C.ButtonHeader>
                <C.ButtonHeader href="/adm/ordens">ORDENS DE SERVIÇO</C.ButtonHeader>
                <C.ButtonHeader href="/adm/cadastro" >CADASTRAR ITENS</C.ButtonHeader>
                <C.ButtonHeader href="/">WEBSITE</C.ButtonHeader>
            </C.Header>
            <C.ColumnContainer>
                <C.RowContainer>
                    <C.Title>ORDENS DE SERVIÇOS ATIVAS</C.Title>
                </C.RowContainer>
                {ordemServicos.map((item) => {

                    const date = new Date(item.dataOrdemServico);

                    return(
                            <C.OrdemServico>
                                <C.RowContainer>
                                    <C.RowContainer>
                                        <C.TextoAlto>Veículo:</C.TextoAlto>
                                        <C.TextoBaixo>{item.veiculo.nomeVeiculo}</C.TextoBaixo>
                                    </C.RowContainer>
                                    <C.RowContainer>
                                        <C.TextoAlto>Status: </C.TextoAlto>
                                        <C.StatusPendente>{item.estado.nomeEstado + ' pelo Cliente'}</C.StatusPendente>
                                    </C.RowContainer>
                                    <C.RowContainer>
                                        <C.TextoAlto>Pedido: </C.TextoAlto>
                                        <C.TextoBaixo>{item.nroOrdemDeServico}</C.TextoBaixo>
                                    </C.RowContainer>
                                </C.RowContainer>
                                <C.RowContainer>
                                    <C.TextoAlto>Veículo:</C.TextoAlto>
                                    <C.TextoBaixo>{item.veiculo.nomeVeiculo}</C.TextoBaixo>
                                </C.RowContainer>
                                <C.RowContainer>
                                    <C.TextoAlto>Modelo:</C.TextoAlto>
                                    <C.TextoBaixo>{item.veiculo.modelo}</C.TextoBaixo>
                                </C.RowContainer>
                                <C.RowContainer>
                                    <C.TextoAlto>Placa:</C.TextoAlto>
                                    <C.TextoBaixo>{item.veiculo.placa}</C.TextoBaixo>
                                </C.RowContainer>
                                <C.RowContainer>
                                    <C.TextoAlto>Marca:</C.TextoAlto>
                                    <C.TextoBaixo>{item.veiculo.marca.nomeMarca}</C.TextoBaixo>
                                </C.RowContainer>
                                <C.RowContainer>
                                    <C.TextoAlto>Cliente:</C.TextoAlto>
                                    <C.TextoBaixo>{item.cliente.nomeCliente}</C.TextoBaixo>
                                </C.RowContainer>
                                <C.RowContainer>
                                    <C.TextoAlto>Data do Pedido:</C.TextoAlto>
                                    <C.TextoBaixo>{date.getDate().toString() +  '/' + date.getMonth().toString() +  '/' + date.getFullYear().toString()}</C.TextoBaixo>
                                </C.RowContainer>
                                <C.RowContainer>
                                    <C.TextoAlto>Serviços:</C.TextoAlto>
                                    <C.TextoBaixo>Troca de Bateria,</C.TextoBaixo>
                                </C.RowContainer>
                                <C.RowContainer>
                                    <C.TextoAlto>Produtos:</C.TextoAlto>
                                    <C.TextoBaixo>Bateria XYZ,</C.TextoBaixo>
                                </C.RowContainer>
                            </C.OrdemServico>

                    )
                })}
                <C.Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1250 240">
                    <path fill="#22BABB" fillOpacity="1" d="M0,64L24,85.3C48,107,96,149,144,144C192,139,240,85,288,80C336,75,384,117,432,144C480,171,528,181,576,170.7C624,160,672,128,720,128C768,128,816,160,864,165.3C912,171,960,149,1008,154.7C1056,160,1104,192,1152,181.3C1200,171,1248,117,1296,80C1344,43,1392,21,1416,10.7L1440,0L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"/>
                </C.Wave>
            </C.ColumnContainer>
        </C.GlobalContainer>
        

    )

}

export default ConsultaAdm;