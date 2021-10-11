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
    background-color: #0078b3;
    height: 5vh;

    ul{
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        list-style-type: none;
    }

    li, a, .dropbtn{
        color: white;
        text-decoration: none;
        margin: 1vh;
        width: 10vw;
        height: 3vh;
        background-color: white;
        color: #39017e;
        text-align: center;
        cursor: pointer;
    }

    .dropbtn {
    background-color: white;
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
        background-color: #;a8e2ff
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