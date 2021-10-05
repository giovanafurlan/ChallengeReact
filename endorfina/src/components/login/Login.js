import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineUser, AiFillLock } from "react-icons/ai";

export const Terceiro = styled.div`
   border: solid 1px #0078b3;
   display: flex;
   flex-direction: column;
   width: 50vw;
   height: 80vh;
   margin: 5vh 0 0 25vw;

   a{
      float: left;
   }
`

export default function Login() {
   return(
      <Terceiro>
          <div>
             <a><Link to="/home"><AiOutlineArrowLeft/>Voltar</Link></a>
          </div>
          <h2>Login</h2>
          <div>
            <AiOutlineUser/>E-mail<input type="email" placeholder="Digite seu e-mail"/><br></br>
            <AiFillLock/>Senha<input type="password" placeholder="Digite sua senha"/>
          </div>
          <div>
             <button type="submit">Entrar</button>
          </div>
          <a><Link to="/cadastro">Cadastre-se</Link></a>
      </Terceiro>
)}