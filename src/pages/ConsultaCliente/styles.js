import styled from 'styled-components';

export const GlobalContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: #1A1A1A;
    justify-content: center;

`

export const Header = styled.header`

    width: 100%;
    display: flex;
    flex-direction: row;
    background: transparent;
    align-items: center;
    justify-content: left;



`

export const ButtonHeader = styled.a`

    position: relative;
    padding: 1em 1.5em;
    color: #ffffff;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 70;
    margin: 25px;
    ::after{
     content: '';
      display: block;
      position: absolute;
      width: 20%;
      height: 20%;
      border: 2px solid;
      transition: all 0.6s ease;
      border-radius: 2px;
    }
    ::before{
      content: '';
      display: block;
      position: absolute;
      width: 20%;
      height: 20%;
      border: 2px solid;
      transition: all 0.6s ease;
      border-radius: 2px;
    }

      ::after{
        bottom: 0;
        right: 0;
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: #22BABB;
        border-right-color: #22BABB;
      }
      ::before{
        top: 0;
        left: 0;
        border-bottom-color: transparent;
        border-right-color: transparent;
        border-top-color: #22BABB;
        border-left-color: #22BABB;
      }
    :hover:after{
        width: 100%;
        height: 100%;
    }
    :hover:before{
        width: 100%;
        height: 100%;
        
    }

`

export const LogoImage = styled.img`

    width: 70px;
    height: 70px;
    margin: 30px;

`

export const Title = styled.h1`

    margin-top: 45px;
    margin-bottom: 25px;
    font-size: 25px;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;


`

export const ContainerPedido = styled.div`

    display: flex;
    flex-direction: column;
    background: rgba(33, 37, 41, 0.93);
    border-radius: 20px;
    width: 80%;
    height: 80%;
    padding: 20px;
    border: 5px solid black;
    border-top: none;
    border-left: none;
    box-shadow: 5px 5px #000000;
    margin-bottom: 50px;
    margin-top: 30px;

`

export const RowContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
`

export const TextoAlto = styled.span`


    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #22BABB;


`

export const TextoBaixo = styled.span`

    margin-left: 15px;
    font-size: 15px;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;


`

export const StatusPendente = styled.span`

    margin-left: 15px;
    font-size: 15px;
    color: #FF7000;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;


`

export const SocialMediaCard = styled.button`

    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #4B4C4C;
    margin: 30px 5px 5px 10px;
    border: none;
    border-radius: 10px;
    :hover{
        transition: 1s;
        background: #ffffff;
    }

`

export const SocialContainer = styled.div`

    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    background: #22BABB;
    justify-content: left;

`

export const ConsultaOrçamentos = styled.div`

    display: flex;
    flex-direction: column;
    background: rgba(33, 37, 41, 0.93);
    border-radius: 20px 20px 0px 0px;
    width: 80%;
    padding: 20px;
    border: 5px solid black;
    border-top: none;
    border-left: none;
    border-bottom: none;
    justify-content: space-between;
    margin-top: 30px;


`

export const ButtonOk = styled.a`

    width: 100px;
    height: 35px;
    background: #262626;
    border: 3px solid #22BABB;
    box-sizing: border-box;
    border-radius: 15px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #FFFFFF;
    margin-left: 25px;
    z-index: 1;
    transform: skewx(-15deg);
    justify-content: center;
    align-items: center;
    display: flex;
    :hover{
        cursor: pointer;
        transition: all .5s ease-in-out;
        transform:  scale(1.1);
    }   


`

export const ButtonNo = styled.a`

    width: 100px;
    height: 35px;
    background: #262626;
    border: 3px solid #FF3B3B;
    box-sizing: border-box;
    border-radius: 15px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #FFFFFF;
    margin-left: 25px;
    z-index: 1;
    transform: skewx(-15deg);
    justify-content: center;
    align-items: center;
    display: flex;
    :hover{
        cursor: pointer;
        transition: all .5s ease-in-out;
        transform:  scale(1.1);
    }   


`