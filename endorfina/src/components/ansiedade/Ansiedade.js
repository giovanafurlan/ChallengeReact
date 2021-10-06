import React from 'react'
import styled from 'styled-components';
import fundo2 from '../../img/fundo2.png'

export const Primeiro = styled.section`
    text-align: center;
    font-size: 30px;

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
        width: 60vw;
    }
`

export default function Ansiedade() {
   return(
      <Primeiro>
        <div className="texto">
            <h2 className="ansiedade">Ansiedade</h2>
            <p> <img src={fundo2} align="left"/><br></br>
               Segundo artigo do site Dasa "A ansiedade na quarentena tem sido uma grande preocupação desde o início da quarentena em meio à pandemia do coronavírus. Desde que o isolamento social foi implementado, como medida preventiva contra a nova doença, tivemos que nos adaptar a novos comportamentos e rotinas. Diante de tantas mudanças, é normal que o nosso corpo e nossa mente sintam esse impacto."<br></br>
            <br></br>"Segundo dados da Organização Mundial da Saúde (OMS), o Brasil tem o maior número de pessoas ansiosas do mundo: 18,6 milhões de brasileiros (9,3% da população) convivem com o transtorno. Com a pandemia, esses sintomas podem ser evidenciados, por isso é importante aprender como lidar com seus efeitos."
            </p>
        </div>
      </Primeiro>
)}