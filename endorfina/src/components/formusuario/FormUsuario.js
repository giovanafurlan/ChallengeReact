import React, { useEffect, useState } from 'react'

function FormUsuario() {

   let id= null
   
   if(props.match.path.toLowerCase().includes('editar')){
      id= props.match.params.id
   }

   const[novo, setNovo]= useState({
      codigo: id,
      nome: "",
      email: "",
      telefone: "",
      dtNascimento: "",
      estado: "",
      cidade: "",
      senha: ""
   })

   let metodo= "post"
   if(id){
      metodo= "put"
   }

   const handleChange= ()=> {
      setNovo({...novo,[e.target.name]: e.target.value})
   }

   const handleSubmit= (e)=> {
      e.preventDefault()

      fetch("/rest/usuario/" + (id ? id: ""),{
         method: metodo,
         headers: {'Content-Type': 'application/json'
      },body: JSON.stringify(novo)
      }).then(()=>{
         window.location= "/"
      })
   }

   useEffect(()=>{
      if(id){
         fetch("/rest/usuario/"+id).then(resp =>{
            return(resp.json())
         }).then(data=>{
            setNovo(data)
         })
      }
   },[id])

   return(
      <div>

      </div>
)}
export default FormUsuario