import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Formulario = styled.div`
   border: solid 2px #0078b3;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 80vw;
   margin: 5vw 10vw 10vw 10vw;

   h3{
      margin: 3vh;
   }

   .botao{
      display:flex;
      justify-content: center;
      margin: 3vw;
   }

   .cancela{
      display:flex;
      justify-content: center;
   }

   .btn {
      width: 60px;
      padding: 10px 0;
      background: #0078b3;
      color: white;
      font-weight: bold;
      font-size: 15px;
      border: none;
      border-radius: 5px;
      transition: 1s all;
      cursor: pointer;
      margin: 10px 0;
   }

   .btn:hover {
      background: #00BFFF;
   }

   form{
      padding: 5vw;
   }
`

function FormHobby(props) {

   let id= null
   
   if(props.match.path.toLowerCase().includes('editar')){
      id= props.match.params.codigo
   }

   const[novo, setNovo]= useState({
      codigo: id,
      nome: ""
   })

   let metodo= "post"
   if(id){
      metodo= "put"
   }

   const handleChange= (e)=> {
      setNovo({...novo,[e.target.name]: e.target.value})
   }

   const handleSubmit= (e)=> {
      e.preventDefault()

      fetch("/rest/hobby/" + (id ? id: ""),{
         method: metodo,
         headers: {'Content-Type': 'application/json'
      },body: JSON.stringify(novo)
      }).then(()=>{
         window.location= "/"
      })
   }

   useEffect(()=>{
      if(id){
         fetch("/rest/hobby/"+id).then(resp =>{
            return(resp.json())
         }).then(data=>{
            setNovo(data)
         })
      }
   },[id])

   return(
      <Formulario>
         <h3>Inserir</h3>

         <form className="formulario" onSubmit={handleSubmit}>
             <div>
                Nome do Hobby: <input name="nome" type="text" placeholder="Nome do hobby" value={novo.nome} onChange={handleChange}/>
             </div>

            <div className="botao">
               <button className="btn" type="submit">Enviar</button>
            </div>

            <Link to="/" className="cancela">Cancelar</Link>
         </form>
      </Formulario>
)}
export default FormHobby