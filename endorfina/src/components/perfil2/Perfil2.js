import React from 'react'
import styled from 'styled-components';
import { Player } from 'video-react';
import user from '../../img/user1.png'
import user3 from '../../img/user3.png'

export const Sexto = styled.div`
    @import "node_modules/video-react/dist/video-react.css";

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

export default function Perfil2() {
   return(
      <Sexto>
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
                  <img src={user3} alt="Foto de perfil do profissional" className="user"/>
                  <figcaption>Alexandre</figcaption>
               </figure>
            </div>
            <h3>Hobbie: Violão</h3>
               {/* <Player className="video"
               playsInline
               poster={live}
               fluid={false}
               width={200}
               height={272}
               src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>     */}
               <iframe width="560" height="315" className="video" src="https://www.youtube.com/embed/jt9oRHFpZfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Sexto>
)}