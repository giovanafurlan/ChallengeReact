import React from 'react'
import styled from 'styled-components';
import user from '../../img/user1.png'
import user5 from '../../img/user5.png'

export const Setimo = styled.div`
  .usuario,.conexao{
      display: inline-block;
  }

  .conexao{
     float: right;
  }

  .hobbies{
      display: flex;
      flex-direction: row;
   }

   .user1{
      width: 10vw;
      border: solid 2px #0078b3;
   }

   .user{
      width: 5vw;
      border: solid 2px #0078b3;
   }

   .video{
      margin-left: 28vw;
      margin-bottom: 10vh;
   }
`

export default function Perfil3() {
   return(
      <Setimo>
          <div className="usuario">
               <figure>
                    <img src={user} alt="Foto de perfil do usuário" className="user1"/>
                    <figcaption><h5>Giovana Furlan</h5>
                    <p>Osasco- SP</p></figcaption>
               </figure>
             </div>
             <div className="conexao">
               <figure>
                  <h4>Profissional</h4>
                  <img src={user5} alt="Foto de perfil do profissional" className="user"/>
                  <figcaption>Cordeiro</figcaption>
               </figure>
            </div>
            <div>
               <h3>Hobbie: Culinária</h3>
               <iframe width="560" height="315" className="video" src="https://www.youtube.com/embed/SeDXen3LqrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
      </Setimo>
)}