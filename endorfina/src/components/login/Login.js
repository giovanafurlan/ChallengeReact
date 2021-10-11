import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineUser, AiFillLock } from "react-icons/ai";

export const Terceiro = styled.div`
   border: solid 2px #0078b3;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 80vw;
   margin: 5vw 10vw 10vw 10vw;

   .voltar{
      font-weight: bold;
      font-size: 16px;
      float: left;
   }

   h2{
      font-size: 25px;
      color: #0078b3;
   }

   .formulario{
      width: 30vw;
   }

   label{
      font-size: 18px;
      margin: 0 0 3px;
   }

   input{
      margin: 20px 0 0;
      padding: 10px 10px;
      width: 20vw;
   }

   input:hover{
      background-color: #FFFAFA;
   }

   .entrar {
      width: 50px;
      padding: 10px 0;
      background: #0078b3;
      color: white;
      font-weight: bold;
      font-size: 15px;
      border: none;
      border-radius: 5px;
      transition: 1s all;
      cursor: pointer;
      margin: 10px 0;
   
   }

   .entrar:hover {
      background: #00BFFF;
   }

   .cadastro{
      margin: 40px 0;
      font-weight: bold;
      font-size: 16px;
   }
`

export default function Login() {
   return (
      <Terceiro>
         <div className="voltar">
            <a><Link to="/home"><AiOutlineArrowLeft />Voltar</Link></a>
         </div>
         <h2>Login</h2>
         <div className="formulario">
            <label for="email">E-mail:</label>
            <input type="email" id="email" required placeholder="Digite seu e-mail" /><br></br>

            <label for="senha">Senha:</label>
            <input type="password" id="senha" required placeholder="Digite sua senha" />
         </div>
         <div>
            <button className="entrar" type="submit">Entrar</button>
         </div>
         <a className="cadastro"><Link to="/cadastro">Cadastre-se</Link></a>
      </Terceiro>
   )
}