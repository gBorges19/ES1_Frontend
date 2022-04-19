import React, {useEffect, useState} from 'react';
import * as C from "./styles";
import Logo from '../../assets/L.png';
import api from "../../api";
import * as H from "../HomeOficina/styles";

function ConsultaCliente() {

    const[ordemPendentes, setOrdemPendentes] = useState([])
    const[ordemAtivas, setOrdemAtivas] = useState([])
    const[cpfCliente, setCpfCliente] = useState('')

        async function getOrdens(){

            async function getOrdensPendentes (){
                const ordemPendentesResponse = await api.get(`ordem_servico/por_cpf_e_estado/${cpfCliente}/Aguardando`);
                if(ordemPendentesResponse.data){
                    setOrdemPendentes(ordemPendentesResponse.data)
                    console.log(ordemPendentesResponse.data)
                }

            }

            async function getOrdensAtivas (){
                const ordemAtivasResponse = await api.get(`ordem_servico/por_cpf_e_estado/${cpfCliente}/Aprovado`);
                if(ordemAtivasResponse.data){
                    setOrdemAtivas(ordemAtivasResponse.data)
                    console.log(ordemAtivasResponse.data)
                }

            }

            await getOrdensPendentes();
            await getOrdensAtivas();

        }

        async function aprovarOrdem(nroOrdemDeServico){
            console.log(nroOrdemDeServico)
            const aprovarResponse = await api.post(`ordem_servico/${nroOrdemDeServico}/aprovar`,{
                id:  nroOrdemDeServico
            })
        }

    async function recusarOrdem(nroOrdemDeServico){
        console.log(nroOrdemDeServico)
        const recusarResponse = await api.post(`ordem_servico/${nroOrdemDeServico}/cancelar`,{
            id:  nroOrdemDeServico
        })
    }


    return (

        <C.GlobalContainer>
            <C.Header>
                <C.LogoImage src={Logo}/>
                <C.ButtonHeader href="/">VOLTAR</C.ButtonHeader>
                <C.TextoAlto>Consulta de pedidos</C.TextoAlto>
            </C.Header>
            <H.ConsultaCard>
                <H.TitleConsulta>INSIRA SEU CPF:</H.TitleConsulta>
                <H.InputConsulta onChange = {(event) => {setCpfCliente(event.target.value)}}/>
                <H.ButtonConsulta onClick = {getOrdens}>CONSULTAR</H.ButtonConsulta>
            </H.ConsultaCard>
            <C.Title>ORÇAMENTOS</C.Title>

            {ordemPendentes.map((item) => {

                return(

                        <C.ConsultaOrçamentos>
                            <C.RowContainer>
                                <C.RowContainer>
                                    <C.TextoAlto>Veículo:</C.TextoAlto>
                                    <C.TextoBaixo>{item.veiculo.nomeVeiculo}</C.TextoBaixo>
                                </C.RowContainer>
                                <C.RowContainer>
                                    <C.TextoAlto>Valor Total:</C.TextoAlto>
                                    <C.TextoBaixo>R$ 700,00</C.TextoBaixo>
                                </C.RowContainer>
                                <C.RowContainer>
                                    <C.ButtonOk onClick={ () => {
                                        aprovarOrdem(item.nroOrdemDeServico)
                                    }}>Aprovar</C.ButtonOk>
                                    <C.ButtonNo onClick={ () => {
                                        recusarOrdem(item.nroOrdemDeServico)
                                    }}>Negar</C.ButtonNo>
                                </C.RowContainer>
                            </C.RowContainer>

                            <C.RowContainer>
                                <C.RowContainer>
                                    <C.TextoAlto>Serviços:</C.TextoAlto>
                                    <C.TextoBaixo>Troca de Bateria,</C.TextoBaixo>
                                    <C.TextoBaixo>Limpeza,</C.TextoBaixo>
                                </C.RowContainer>
                                <C.RowContainer>
                                    <C.TextoAlto>Produtos:</C.TextoAlto>
                                    <C.TextoBaixo>{item.produtoList.data}</C.TextoBaixo>
                                    <C.TextoBaixo>Grand Pix Brilho,</C.TextoBaixo>
                                </C.RowContainer>
                            </C.RowContainer>
                        </C.ConsultaOrçamentos>

                )

            })}

            <C.Title>PEDIDOS</C.Title>
            {ordemAtivas.map((item) => {

                const date = new Date(item.dataOrdemServico);

                return(
                        <C.ContainerPedido>
                            <C.RowContainer>
                                <C.TextoAlto>Pedido: </C.TextoAlto>
                                <C.TextoBaixo>{item.nroOrdemDeServico}</C.TextoBaixo>
                            </C.RowContainer>
                            <C.RowContainer>
                                <C.TextoAlto>Status: </C.TextoAlto>
                                <C.StatusPendente>PENDENTE</C.StatusPendente>
                            </C.RowContainer>
                            <C.RowContainer>
                                <C.TextoAlto>Cliente:</C.TextoAlto>
                                <C.TextoBaixo>{item.cliente.nomeCliente}</C.TextoBaixo>
                            </C.RowContainer>
                            <C.RowContainer>
                                <C.TextoAlto>Veículo:</C.TextoAlto>
                                <C.TextoBaixo>{item.veiculo.nomeVeiculo}</C.TextoBaixo>
                            </C.RowContainer>
                            <C.RowContainer>
                                <C.TextoAlto>Data do Pedido:</C.TextoAlto>
                                <C.TextoBaixo>{date.getDate().toString() +  '/' + date.getMonth().toString() +  '/' + date.getFullYear().toString()}</C.TextoBaixo>
                            </C.RowContainer>
                            <C.RowContainer>
                                <C.TextoAlto>Valor Pago:</C.TextoAlto>
                                <C.TextoBaixo> R$ 749,00</C.TextoBaixo>
                            </C.RowContainer>
                        </C.ContainerPedido>
                )
            })}



            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1250 240">
                <path fill="#22BABB" fillOpacity="1" d="M0,64L24,85.3C48,107,96,149,144,144C192,139,240,85,288,80C336,75,384,117,432,144C480,171,528,181,576,170.7C624,160,672,128,720,128C768,128,816,160,864,165.3C912,171,960,149,1008,154.7C1056,160,1104,192,1152,181.3C1200,171,1248,117,1296,80C1344,43,1392,21,1416,10.7L1440,0L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"/>
            </svg>
            <C.SocialContainer>
                <C.SocialMediaCard>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#22BABB" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
                </C.SocialMediaCard>
                <C.SocialMediaCard>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#22BABB" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                </svg>
                </C.SocialMediaCard>
                <C.SocialMediaCard>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#22BABB" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
                </C.SocialMediaCard>
                <C.SocialMediaCard>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tiktok" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#22BABB" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
                </svg>
                </C.SocialMediaCard>
            </C.SocialContainer>
        </C.GlobalContainer>
        

    )


}

export default ConsultaCliente;