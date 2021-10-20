import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import user from '../../img/user1.png'
import user2 from '../../img/user2.png'
import user3 from '../../img/user3.png'
import meditacao from '../../img/meditacao.jpg'
import culinaria from '../../img/culinaria.jpg'
import musica from '../../img/musica.jpg'

export const Quinto = styled.div`
  .usuario,.conexao{
      display: inline-block;
  }

  .conexao{
     float: right;
  }

  .user1{
      width: 10vw;
      border: solid 2px #0078b3;
   }

   .user{
      width: 5vw;
      border: solid 2px #0078b3;
   }

   h3{
      margin: 8vh;
   }

   .hobbies{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-decoration: underline;
   }

   .hobby{
      border: solid 2px #0078b3;
      width: 25vw;
   }

   .hb{
      text-align: center;
      font-size: 1.2rem;
   }
`

export default function Perfil() {
   return(
      <Quinto>
            <div className="usuario">
               <figure>
                  <img src={user} alt="Foto de perfil do usuário" className="user1"/>
                  <figcaption><h5>Giovana Furlan</h5>
               <p>Osasco- SP</p></figcaption>
               </figure>
             </div>
            <div className="conexao">
               <figure>
                  <h4>Suas conexões</h4>
                  <img src={user2} alt="Foto de perfil do usuário" className="user"/>
                  <figcaption>Emily Manfrin</figcaption>
               </figure>
               <figure>
                  <img src={user3} alt="Foto de perfil do usuário" className="user"/>
                  <figcaption>Diego Augusto</figcaption>
               </figure>
            </div>
               
            <h3>Seus Hobbies</h3>
            <div className="hobbies">
               <figure>
                  <figcaption className="hb"><Link to="/perfil2">Violão</Link></figcaption>
                  <img src={musica} alt="" className="hobby"/>
               </figure>
               <figure>
                  <figcaption className="hb"><Link to="/perfil3">Culinária</Link></figcaption>
                  <img src={culinaria} alt="" className="hobby"/>
               </figure>
               <figure>
                  <figcaption className="hb"><Link to="/perfil4">Meditação</Link></figcaption>
                  <img src={meditacao} alt="" className="hobby"/>
               </figure>
            </div>
      </Quinto>
)}