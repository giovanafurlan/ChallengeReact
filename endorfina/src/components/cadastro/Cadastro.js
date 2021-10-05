import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai"
import styled from 'styled-components';

export const Quarto = styled.section`
   border: solid 1px #0078b3;
   display: flex;
   flex-direction: column;
   width: 50vw;
   height: 80vh;
   margin: 5vh 0 0 25vw;
`

export default function Cadastro() {
   return(
      <Quarto>
          <div>
             <a><Link to="/home"><AiOutlineArrowLeft/>Voltar</Link></a>
          </div>
          <h2>Cadastro</h2>
          <div>
            Nome: <input type="text" placeholder="Digite seu nome"/><br></br>
            E-mail: <input type="email" placeholder="Digite seu e-mail"/><br></br>
            Data de Nascimento: <input type="date" placeholder="Digite sua data de nascimento"/><br></br>
            <label for="user">Perfil: </label>
            <select id="user">
               <option value="profi">Profissional</option>
               <option value="user">Usuário</option>
            </select><br></br>
          </div>
          <div>
             Hobbies: <input type="checkbox" id="danca"/>
             <label for="danca">Dança</label>
             <input type="checkbox" id="musica"/>
             <label for="musica">Instrumentos Musicais</label>
             <input type="checkbox" id="meditacao"/>
             <label for="meditacao">Meditação</label>
             <input type="checkbox" id="culinaria"/>
             <label for="culinaria">Culinária</label>
             <input type="checkbox" id="idioma"/>
             <label for="idioma">Idiomas</label><br></br>
             Telefone: <input type="number" placeholder="Digite seu telefone"/><br></br>
             Estado: <input type="text" placeholder="Digite seu estado"/><br></br>
             Cidade: <input type="text" placeholder="Digite sua cidade"/><br></br>
             Senha: <input type="password" placeholder="Digite sua senha"/>
          </div>
          <div>
             <button type="submit">Cadastrar</button>
          </div>
      </Quarto>
)}