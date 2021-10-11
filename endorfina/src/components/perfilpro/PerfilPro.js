import React from 'react'
import user3 from '../../img/user3.png'
import styled from 'styled-components';

export const Setimo = styled.div`
  .user1{
      width: 5vw;
      border: solid 2px #0078b3;
   }
`

export default function PerfilPro() {
   return(
      <Setimo>
            <div className="usuario">
               <figure>
                  <img src={user3} alt="Foto de perfil do profissional" className="user1"/>
                  <figcaption><h5>Alexandre</h5></figcaption>
               </figure>
             </div>            
      </Setimo>
)}