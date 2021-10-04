import React from 'react'
import styled from 'styled-components';
import fundo from '../../img/fundo.png'
import user1 from '../../img/user1.png'
import user2 from '../../img/user2.png'
import user3 from '../../img/user3.png'

export const Corpo = styled.section`
    display: flex;
    flex-direction: column;

    .texto{
        width: 95vw;
        height: 50vh;
        font-size: 1.2vw;
    }

    .texto p{
        text-align: justify;
        margin-top: 20px;
    }

    .texto .titulo{
        padding: 2vh;
        text-transform: uppercase;
        text-align: center;
        font-size: 50px;
        color: #0078b3;
        display: flex;
        flex-direction: column;
    }

    .texto{
        width: 95vw;
        height: 50vh;
        font-size: 1.2vw;
    }

    .texto p{
        text-align: justify;
        margin-top: 20px;
    }

    .texto .titulo{
        padding: 2vh;
        text-transform: uppercase;
        text-align: center;
        font-size: 50px;
        color: #0078b3;
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

    .depoimentos{
        text-align: center;
        font-size: 30px;
        color: #0078b3;
    }

    .box{
        font-size: 1.2vw;
        padding: 5vh;
        height: 55vh;
    }

    .box figure{
        display: inline-block;
        width: 25vw;
        margin: 2vw;
    }

    .box figure img{
        width: 10vw;
        margin-left: 7vw;
    }

    .nome{
        font-size: 20px;
        color: #0078b3;
        text-align: center;
    }
`

export default function Home() {
   return(
      <Corpo>
          <div className="texto">
               <h2 className="titulo">Endorfina</h2>
               <p> <img src={fundo} align="left"/><br></br>
               A plaforma denominada Endorfina visa o controle da ansiedade por meio de prática de hobbies, a plataforma oferece uma série de opções que o usuário pode praticar, interação com usuários que praticam o mesmo, e acompanhamento com profissionais da área escolhida.<br></br>
               <br></br>A missão da plataforma é obter uma gama de opções de hobbies para enriquecer o projeto cada vez mais, a visão é fornecer um bom-estar ao usuário, um ambiente seguro, que seja uma válvula de escape de suas tensões que vem a ocasiaonar uma crise de ansiedade.
               </p>
            </div>

            <h2 className="depoimentos">Depoimentos</h2>
            <div className="box">
               <figure>
                  <img src= {user1}/>
                  <figcaption className="nome">Maria</figcaption>
                  <figcaption>"A plataforma é incrível, me ajudou demais a me distrair das crises de ansiedade, e também descobrir um dom que tenho na pintura"</figcaption>
               </figure>

               <figure>
                  <img src= {user2}/>
                  <figcaption className="nome">Lara</figcaption>
                  <figcaption>"A plataforma é incrível, me ajudou demais a me distrair das crises de ansiedade, e também descobrir um dom que tenho na pintura"</figcaption>
               </figure>

               <figure>
                  <img src= {user3}/>
                  <figcaption className="nome">Paulo</figcaption>
                  <figcaption>"A plataforma é incrível, me ajudou demais a me distrair das crises de ansiedade, e também descobrir um dom que tenho na pintura"</figcaption>
               </figure>
            </div>
      </Corpo>
)}