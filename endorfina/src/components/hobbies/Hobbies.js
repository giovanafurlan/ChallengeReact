import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fundo3 from '../../img/fundo3.png'
import hobbies from '../../img/hobbies.png'

export const Segundo = styled.section`
    align: center;

    .texto p{
        text-align: justify;
    }

    .texto img{
        width: 15vw;
        margin-right: 15px;
        transform: scale(90%);
        transition: ease-in transform 1s;
    }

    .texto img:hover{
        transform: scale(1.05);
    }

    .imagem img{
        width: 65vw;
    }

    .btn{
        display: flex;
        justify-content: center;
    }

    .participe {
        width: 10vw;
        height: 8vh;
        background: lightblue;
        color: white;
        font-weight: bold;
        font-size: 1.5vw;
        border: none;
        border-radius: 5px;
        transition: 1s all;
        cursor: pointer;
        text-align: center;
        margin-bottom: 3vh;

    }

    .participe:hover {
        background: #0078b3;
        transform: scale(1.2);
    }
`

export default function Hobbies() {
   return(
      <Segundo>
          <div className="texto">
               <h2 className= "ansiedade">Patrica de Hobbies</h2>
               <p> <img src={fundo3} align="left"/><br></br><br></br>
               Um hobby funciona como uma válvula de escape para as tensões e preocupações do dia a dia, mas é uma medida imprescindível para quem tem algum quadro envolvendo ansiedade, de transtorno de ansiedade generalizada à sensação natural que atinge todo e qualquer ser humano em circunstâncias estressantes.<br></br>
               <br></br>A plataforma conta com muitos tipos de hobbies, alguns exemplos dos mais procurados são: Dança, Artesanato, Culinária, Musculação, Meditação, Instrumentos Musicais, e Idiomas, todos com profissionais especializados, lecionando, e ajudando com sua saúde mental.
               </p>
            </div>

            <div className= "imagem">
               <figure>
                  <img src={hobbies}></img>
               </figure>
            </div>

            <div className= "btn">
               <button className="participe"><Link to="/cadastro">Participe</Link></button>
            </div>
      </Segundo>
)}