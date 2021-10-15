import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai"
import styled from 'styled-components';

export const Quarto = styled.section`
   border: solid 2px #0078b3;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 80vw;
   margin: 2vw 10vw 20vh 10vw;

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
      width: 40vw;
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
      width: 80px;
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

   .botao{
      margin: 3vh;
   }
`

export default function Cadastro() {
   return (
      <Quarto>
         <div className="voltar">
            <a><Link to="/home"><AiOutlineArrowLeft />Voltar</Link></a>
         </div>
         <h2>Cadastro</h2>

         <form className="formulario">
            <label for="nome">Nome:</label>
            <input type="nome" id="nome" required placeholder="Digite seu nome" /><br></br>

            <label for="email">E-mail:</label>
            <input type="email" id="email" required placeholder="Digite seu e-mail" /><br></br>

            <label for="tel">Telefone:</label>
            <input type="tel" id="tel" placeholder="Digite seu telefone" /><br></br>
            
            <label for="data">Data de Nascimento:</label>
            <input type="date" id="data" required placeholder="Digite sua data de nascimento" /><br></br>

            <label for="estado">Estado:</label>
            <input type="text" id="estado" required placeholder="Digite seu estado" /><br></br>

            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" placeholder="Digite sua cidade" /><br></br>

            <label for="senha">Senha:</label>
            <input type="password" id="senha" placeholder="Digite sua senha" />
         </form>

         <div className="botao">
            <button className="entrar" type="submit"><Link to="/login">Cadastrar</Link></button>
         </div>
      </Quarto>
   )
}