import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function FormHobby(props) {

   let id= null
   
   if(props.match.path.toLowerCase().includes('editar')){
      id= props.match.params.id
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
      <div>
         <h2>Inserir</h2>

         <form className="formulario" onSubmit={handleSubmit}>
             <div>
                <input type="text" required placeholder="Nome do hobby" value={novo.nome} onChange={handleChange}/>
             </div>

            <div className="botao">
               <button className="entrar" type="submit"><Link to="/login">Enviar</Link></button>
            </div>

            <Link to="/">Cancelar</Link>
         </form>

         
      </div>
)}
export default FormHobby