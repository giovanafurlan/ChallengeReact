import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai"
import styled from 'styled-components';

export const Quarto = styled.section`
border: solid 2px #0078b3;

.voltar{
   position: absolute;
   top: 120px;
   font-weight: bold;
   font-size: 16px;
}

h2{
   font-size: 25px;
   color: #0078b3;
   text-align: center;
}

.formulario{
   margin: 40px 0;
}

label{
   display: block;
   font-size: 18px;
   margin: 0 0 3px;
}

input{
   display: block;
   margin: 20px 0 0;
   padding: 10px 10px;
   width: 50%; 
}

input:hover{
   background-color: #FFFAFA;
}

.entrar {
   width: 200px;
   padding: 15px 0;
   background: #0078b3;
   color: white;
   font-weight: bold;
   font-size: 18px;
   border: none;
   border-radius: 5px;
   transition: 1s all;
   cursor: pointer;
   margin: 10px 0;
  
}

.entrar:hover {
   background: #00BFFF;
}

`

export default function Cadastro() {
   return (
      <Quarto>
         <div className="voltar">
            <a><Link to="/home"><AiOutlineArrowLeft />Voltar</Link></a>
         </div>
         <h2>Cadastro</h2>

         <div className="formulario">
            <label for="nome">Nome:</label>
            <input type="nome" id="nome" required placeholder="Digite seu nome" /><br></br>

            <label for="email">E-mail:</label>
            <input type="email" id="email" required placeholder="Digite seu e-mail" /><br></br>
            
            <label for="senha">Senha:</label>
            <input type="password" id="senha" placeholder="Digite sua senha" /><br></br>

            <label for="tel">Telefone:</label>
            <input type="tel" id="tel" placeholder="Digite seu telefone" /><br></br>
            
            <label for="data">Data de Nascimento:</label>
            <input type="date" id="data" required placeholder="Digite sua data de nascimento" /><br></br>

            <label for="estado">Estado:</label>
            <input type="text" id="estado" required placeholder="Digite seu estado" /><br></br>

            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" placeholder="Digite sua cidade" /><br></br>

         </div>

         <div>
            <button className="entrar" type="submit">Cadastrar</button>
         </div>
      </Quarto>
   )
}