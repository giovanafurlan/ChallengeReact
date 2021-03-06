import styled from 'styled-components';

export const Container = styled.section`
    font-family: Verdana, Arial, Helvetica, sans-serif;
    text-decoration: none;

    h1{
        font-size: 3rem;
        text-transform: uppercase;
        color: #0078b3;
        text-align: center;
        margin: 2vh;
    }

    h2{
        font-size: 1.8rem;
        text-transform: uppercase;
        color: #0078b3;
        text-align: center;
        margin: 5vh;
    }

    h3{
        font-size: 1.5rem;
        text-transform: uppercase;
        color: #0078b3;
        text-align: center;
        margin: 1vh;
    }

    h4{
        font-size: 1rem;
        text-transform: uppercase;
        color: #0078b3;
    }

    h5{
        font-size: 1rem;
    }

    p{
        font-size: 1.2vw;
    }
`

export const Topo = styled.header`
    background-color: #aae3ff;
    height: 5vh;

    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        list-style-type: none;
    }

    .cadastro{
        background-color: white;
    }

    li, a, .dropbtn{
        text-decoration: none;
        margin: 1vh;
        width: 10vw;
        height: 3vh;
        color: #39017e;
        text-align: center;
        cursor: pointer;
    }

    .dropbtn {
    background-color: #dff4ff;
    color: #39017e;
    font-size: 16px;
    border: none;
    }

    .dropdown {
    position: relative;
    display: inline-block;
    }

    .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    }

    .dropdown-content a {
    color: black;
    text-decoration: none;
    display: block;
    }

    .dropdown:hover .dropdown-content {
    display: block;
    }

    li:hover, a:hover, .dropbtn:hover{
        background-color: #00a9fb
    }

    .conf{
        
    }
`

export const Baixo = styled.footer`
    background-color: #aae3ff;
    font-size: 1rem;
    color: #39017e;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    p{
        padding: 0;
        margin: 0;
    }
`
