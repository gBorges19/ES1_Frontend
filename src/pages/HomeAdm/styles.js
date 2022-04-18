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
    justify-content: center;
  
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

export const FormContainer = styled.form`

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

`

export const Title = styled.h1`

    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 25px;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;


`

export const RowContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;

`

export const TextInput = styled.span`

    margin: 5px;
    font-size: 15px;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;


`

export const TitleContainer = styled.h2`

    margin: 50px 10px 30px 5px;
    font-size: 18px;
    color: #22BABB;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;


`

export const InputMenor = styled.input`

    border: 1px solid #ffffff;
    border-top: none;
    border-left: none;
    border-right: none;
    margin: 5px;
    width: 50px;
    background: none;
    color: #ffffff;

`

export const InputMedio = styled.input`

    border: 1px solid #ffffff;
    border-top: none;
    border-left: none;
    border-right: none;
    margin: 5px;
    width: 105px;
    background: none;
    color: #ffffff;

`

export const InputMaior = styled.input`

    border: 1px solid #ffffff;
    border-top: none;
    border-left: none;
    border-right: none;
    margin: 5px;
    width: 220px;
    background: none;
    color: #ffffff;

`

export const CustomerContainer = styled.div`

    display: flex;
    flex-direction: column;

`

export const CarContainer = styled.div`

    display: flex;
    flex-direction: column;

`

export const ServicesContainer = styled.div`

    display: flex;
    flex-direction: column;

`

export const TextInputServices = styled.span`

    margin: 25px 55px 25px 10px;
    font-size: 15px;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;


`

export const AddButton = styled.button`

    border: none;
    background: transparent;
    width: 20px;
    height: 20px;
    margin-top: 15px;
    align-items: center;

`

export const TrashButton = styled.svg`


    margin-top: 10px;



`

export const ButtonCadastro = styled.a`

    width: 250px;
    height: 50px;
    background: #262626;
    border: 3px solid #22BABB;
    box-sizing: border-box;
    border-radius: 15px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #FFFFFF;
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

export const InputSelect = styled.select`

    border: 1px solid #ffffff;
    border-top: none;
    border-left: none;
    border-right: none;
    margin: 5px;
    width: 220px;
    background: rgba(33, 37, 41, 0.93);
    color: #ffffff;

`

export const Checkbox = styled.input`

    margin-left: 50px;

`