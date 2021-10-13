import React from 'react'
import user4 from '../../img/user4.png'
import aula from '../../img/aula.png'
import styled from 'styled-components';

export const Setimo = styled.div`
  .user1{
      width: 10vw;
      border: solid 2px #0078b3;
   }

   .live{
   }

   .aula{
      width: 50%;
      margin-left: 20vw;

   }
`

export default function PerfilPro() {
   return(
      <Setimo>
            <div className="usuario">
               <figure>
                  <img src={user4} alt="Foto de perfil do profissional" className="user1"/>
                  <figcaption><h5>Alexandre</h5>
                  <p>Aulas de violão</p></figcaption>
               </figure>
             </div>      
             <div className="live">
               <h3>LIVE</h3>
               <figure>
                  <img src={aula} alt="Aula ao vivo de violão" className="aula"/>
               </figure>
            </div>      
      </Setimo>
)}