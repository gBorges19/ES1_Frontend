import styled from 'styled-components';
import Check from '../../assets/Services.png';
import Banner from '../../assets/Banner.jpg';

export const GlobalContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    background: #1A1A1A;
    justify-content: center;

`

export const ContainerCar = styled.div`

    background-image: url(${Banner});
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;


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

export const Title = styled.h1`

    margin-top: 50px;
    font-size: 35px;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-align: center;
    align-self: center;
    margin-left:auto;

`

export const CarImage = styled.img`

    width: 25%;
    margin-left: auto;

`

export const RowContainer = styled.div`

    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content:center;

`

export const RowContainerRight  = styled.div`

    display: flex;
    flex-direction: row;
    width: 85%;
    margin-right: 50px;
    align-items: center;
    justify-content: right;

`

export const RowContainerLeft  = styled.div`

    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: left;


`

export const SocialContainer = styled.div`

    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    background: #22BABB;
    justify-content: left;

`

export const DivisorContainer = styled.div`

    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 100px;
    align-items: center;
    justify-content: center;
    

`

export const TitleContainer = styled.h2`

    margin: 20px 10px 10px 145px;
    font-size: 18px;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    

`

export const DivisorColor = styled.hr`

    width: 5%;
    height: 3px;
    margin: 5px;
    background-color: #22BABB;
    border: none;

`

export const DivisorWhite = styled.hr`

    width: 75%;
    height: 2px;
    margin: 5px;
    background-color: white;
    border: none;

`

export const TextContainer = styled.div`

    display: flex;
    flex-direction: column;
    width: 62%;
    align-items: center;
    justify-content: center;
    text-align: center;


`

export const Text = styled.p`

    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    line-height: 22px;
    color: white;
    margin: 5px 0px 5px 0px;


`

export const ConsultaCard = styled.div`


    display: flex;
    flex-direction: column;
    background: rgba(38, 38, 38, 0.93);
    border-radius: 15px;
    border-top: none;
    border-left: none;
    border-right: 2px solid #22BABB;
    border-bottom: 2px solid #22BABB;
    box-shadow: 2px #22BABB;
    width: 40%;
    height: 400px;
    margin-top: 30px;
    margin-bottom: 50px;
    align-items: center;
    text-align: center;
    justify-content: center;

`

export const TitleConsulta = styled.h2`

        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: white;
        margin: 20px;

`

export const InputConsulta = styled.input`

    border: 1px solid #ffffff;
    border-top: none;
    border-left: none;
    border-right: none;
    margin: 20px;
    width: 50%;
    background: none;
    color: #ffffff;

`

export const ButtonConsulta = styled.a`

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
    margin: 20px;
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

export const RowListDiv = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin: 50px;

`

export const ListServices = styled.ul`

    list-style-image: url(${Check});
    list-style-type:none;
    text-align: left; 
    margin: 55px;
    list-style-position: outside;

`

export const ListInfoServices = styled.li`

    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-size: 15px;
    margin: 10px;
    color: #FFFFFF;

`

export const TextArea = styled.textarea`

    background: none;
    color: white;
    border-radius: 15px;
    padding: 15px;
    margin: 10px;
    border: 2px solid #ffffff;
    resize: none;

`

export const IntroContainer = styled.h2`

    font-size: 16.5px;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin: 5px;
    

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