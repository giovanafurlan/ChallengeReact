import React from 'react'
import styled from 'styled-components';
import user from '../../img/user1.png'
import user2 from '../../img/user2.png'
import user3 from '../../img/user3.png'
import meditacao from '../../img/meditacao.jpg'
import culinaria from '../../img/culinaria.jpg'
import musica from '../../img/musica.jpg'

export const Quinto = styled.div`
   .cima{
      height: 70vh;
   }

   .user{
      width: 5vw;
   }

   .baixo{
      height: 50vh;
   }

   .hobbies{
      display: flex;
      flex-direction: row;
   }

   .hobby{
      border: solid 2px #0078b3;
      width: 25vw;
   }

   figcaption{
      text-align: center;
   }
`

export default function Perfil() {
   return(
      <Quinto>
         <div className="cima">
            <div className="user">
             <img src={user} alt="Foto de perfil do usuário" className="user"/>
             <h4>Giovana Furlan</h4>
             <p>Osasco- SP</p>
            </div>
            <div className="conec">
               <h4>Suas conexões</h4>
               <img src={user2} alt="Foto de perfil do usuário" className="user"/>Emily Manfrin<br></br>
               <img src={user3} alt="Foto de perfil do usuário" className="user"/>Diego Augusto
            </div>
         </div>
         <div className="baixo">
            <h3>Seus Hobbies</h3>
            <div className="hobbies">
               <figure>
                  <img src={musica} alt="" className="hobby"/>
                  <figcaption>Violão</figcaption>
               </figure>
               <figure>
                  <img src={culinaria} alt="" className="hobby"/>
                  <figcaption>Culinária</figcaption>
               </figure>
               <figure>
                  <img src={meditacao} alt="" className="hobby"/>
                  <figcaption>Meditação</figcaption>
               </figure>
            </div>
            
         </div>
      </Quinto>
)}