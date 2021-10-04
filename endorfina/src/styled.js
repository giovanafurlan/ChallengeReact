import styled from 'styled-components';

export const Container = styled.div`
    font-family: Verdana, Arial, Helvetica, sans-serif;
`

export const Topo = styled.header`
    background-color: #0078b3;
    height: 6vh;

    .menu{
        color: white;
    }

    ul{
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        list-style-type: none;
    }

    li{
        text-decoration: none;
        margin: 8px 0 5px 0;
    }

    .opcao:hover{
        color: #f8f672;
        text-decoration: underline;
    }

    .cadastro{
        color: #0078b3;
        background-color: white;
        text-align: center;
    }

    .cadastro {
        width: 8vw;
        height: 3vh;
    }
`

export const Base = styled.footer`
    display: flex;
    flex-direction: row;

    footer .copyright {
        text-align: center;
        color: #FFFFFF;
        font-size: 18px;
        margin-right: 10vw;
    }

    footer a{
        font-size: 30px;
        color: white;
        margin: 0 10px 0 10px;
    }
`