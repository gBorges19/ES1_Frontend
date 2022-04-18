import React from 'react';
import * as H from "./styles";
import Logo from '../../assets/L.png';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'
import 'leaflet-defaulticon-compatibility';
import 'leaflet/dist/leaflet.css';

function HomeOficina() {

    return(

        <H.GlobalContainer>

            <H.ContainerCar>
                <H.Header>
                    <H.LogoImage src={Logo}></H.LogoImage>
                    <H.ButtonHeader href="">INICIO</H.ButtonHeader>
                    <H.ButtonHeader href="#Serviços">SERVIÇOS</H.ButtonHeader>
                    <H.ButtonHeader href="#Consulta" >CONSULTA</H.ButtonHeader>
                    <H.ButtonHeader href="#Contato">CONTATO</H.ButtonHeader>
                </H.Header>
                <H.RowContainer>
                        <H.Title>RACCOON MECHANICAL</H.Title>
                        <H.Title></H.Title>
                </H.RowContainer>
            </H.ContainerCar>
            <H.RowContainerLeft>
                <H.TitleContainer id="Serviços">SERVIÇOS</H.TitleContainer>
            </H.RowContainerLeft>
            <H.DivisorContainer>
                <H.DivisorColor></H.DivisorColor>
                <H.DivisorWhite></H.DivisorWhite>
            </H.DivisorContainer>
            <H.TextContainer>
                <H.Text>A Raccoon Mechanical trabalha com carros com no máximo 10 anos de idade.</H.Text>
                <H.Text>Sempre antes de levar seu carro faça um agendamento, dessa maneira traz mais comodidade e a certeza de que o serviço seja feito no prazo. O agendamento pode ser feito por telefone, WhatsApp ou pelo formulário disponibilizado na página interna da unidade.</H.Text>
                <H.Text style={{fontWeight: 'bold', marginTop: 50}}>DENTRO DE NOSSA OFICINA, SEM DÚVIDA, SEU CARRO CONTARÁ COM OS MELHORES SERVIÇOS</H.Text>
                <H.Text>Sendo assim, separamos abaixo uma lista com nossos principais serviços.</H.Text>
            </H.TextContainer>
            <H.RowListDiv>
                <H.ListServices>
                <H.ListInfoServices>Diagnóstico completo</H.ListInfoServices>
                <H.ListInfoServices>Limpeza e reparo do sistema de arrefecimento</H.ListInfoServices>
                <H.ListInfoServices>Troca de fluído de câmbio automático</H.ListInfoServices>
                <H.ListInfoServices>Troca de embreagem</H.ListInfoServices>
                </H.ListServices>
                <H.ListServices>
                <H.ListInfoServices>Manutenções preventivas e corretivas</H.ListInfoServices>
                <H.ListInfoServices>Fazemos revisão geral de férias</H.ListInfoServices>
                <H.ListInfoServices>Revisão completa da suspensão</H.ListInfoServices>
                <H.ListInfoServices>Sistema de freios (revisão)</H.ListInfoServices>
                </H.ListServices>
                <H.ListServices>
                <H.ListInfoServices>Revisão do sistema de injeção eletrônica</H.ListInfoServices>
                <H.ListInfoServices>Troca de correia dentada</H.ListInfoServices>
                <H.ListInfoServices>Troca de óleo e filtros</H.ListInfoServices>
                <H.ListInfoServices>Higienização do ar condicionado</H.ListInfoServices>
                </H.ListServices>
            </H.RowListDiv>
            <H.RowContainerLeft>
                <H.TitleContainer id="Consulta">CONSULTA</H.TitleContainer>
            </H.RowContainerLeft>
            <H.DivisorContainer>
                <H.DivisorColor></H.DivisorColor>
                <H.DivisorWhite></H.DivisorWhite>
            </H.DivisorContainer>
            <H.IntroContainer>SOLICITOU UM ORÇAMENTO OU JÁ APROVOU UM ?</H.IntroContainer>
            <H.IntroContainer>CONSULTE O STATUS DE SEU PEDIDO AQUI !</H.IntroContainer>
            <H.ConsultaCard>
                <H.TitleConsulta>INSIRA SEU CPF:</H.TitleConsulta>
                <H.InputConsulta></H.InputConsulta>
                <H.ButtonConsulta href="/consultacliente">CONSULTAR</H.ButtonConsulta>
            </H.ConsultaCard>
            <H.RowContainerLeft>
                <H.TitleContainer id="Contato">CONTATO</H.TitleContainer>
            </H.RowContainerLeft>
            <H.DivisorContainer>
                <H.DivisorColor></H.DivisorColor>
                <H.DivisorWhite></H.DivisorWhite>
            </H.DivisorContainer>
            <H.IntroContainer>DÚVIDAS? ENTRE EM CONTATO:</H.IntroContainer>
            <H.InputConsulta placeholder="Name"></H.InputConsulta>
            <H.InputConsulta placeholder="Email Adress"></H.InputConsulta>
            <H.InputConsulta placeholder="Subject"></H.InputConsulta>
            <H.TextArea placeholder="Your Message" cols="100" rows="8"></H.TextArea>
            <H.ButtonConsulta>ENVIAR</H.ButtonConsulta>

            <H.RowContainerLeft>
                <H.TitleContainer>LOCAL</H.TitleContainer>
            </H.RowContainerLeft>
            <H.DivisorContainer>
                <H.DivisorColor></H.DivisorColor>
                <H.DivisorWhite></H.DivisorWhite>
            </H.DivisorContainer>
            <H.IntroContainer>NOS ENCONTRE!</H.IntroContainer>




            <MapContainer center={[-25.487688409482722, -54.50875797882768]} zoom={20} style={{width: "500px", height: "500px"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-25.487688409482722, -54.50875797882768]}>
                </Marker>
            </MapContainer>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1250 240">
                <path fill="#22BABB" fill-opacity="1" d="M0,64L24,85.3C48,107,96,149,144,144C192,139,240,85,288,80C336,75,384,117,432,144C480,171,528,181,576,170.7C624,160,672,128,720,128C768,128,816,160,864,165.3C912,171,960,149,1008,154.7C1056,160,1104,192,1152,181.3C1200,171,1248,117,1296,80C1344,43,1392,21,1416,10.7L1440,0L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
            </svg>
            <H.SocialContainer>
                <H.SocialMediaCard>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#22BABB" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
                </H.SocialMediaCard>
                <H.SocialMediaCard>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#22BABB" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                </svg>
                </H.SocialMediaCard>
                <H.SocialMediaCard>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#22BABB" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
                </H.SocialMediaCard>
                <H.SocialMediaCard>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tiktok" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#22BABB" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
                </svg>
                </H.SocialMediaCard>
            </H.SocialContainer>
        </H.GlobalContainer>
        

    )
}


export default HomeOficina;