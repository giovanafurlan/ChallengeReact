import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function FormUsuario(props) {

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

   const handleChange= (e)=> {
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
         <h2>Cadastro</h2>

         <form className="formulario" onSubmit={handleSubmit}>
            <label for="nome">Nome:</label>
            <input type="nome" id="nome" required placeholder="Digite seu nome" value={novo.nome} onChange={handleChange}/><br></br>

            <label for="email">E-mail:</label>
            <input type="email" id="email" required placeholder="Digite seu e-mail" value={novo.email} onChange={handleChange}/><br></br>

            <label for="tel">Telefone:</label>
            <input type="tel" id="tel" placeholder="Digite seu telefone" value={novo.telefone} onChange={handleChange}/><br></br>
            
            <label for="data">Data de Nascimento:</label>
            <input type="date" id="data" required placeholder="Digite sua data de nascimento" value={novo.dtNascimento} onChange={handleChange}/><br></br>

            <label for="estado">Estado:</label>
            <input type="text" id="estado" required placeholder="Digite seu estado" value={novo.estado} onChange={handleChange}/><br></br>

            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" placeholder="Digite sua cidade" value={novo.cidade} onChange={handleChange}/><br></br>

            <label for="senha">Senha:</label>
            <input type="password" id="senha" placeholder="Digite sua senha" value={novo.senha} onChange={handleChange}/>

            <div className="botao">
               <button className="entrar" type="submit"><Link to="/login">Cadastrar</Link></button>
            </div>

            <Link to="/">Cancelar</Link>
         </form>

         
      </div>
)}
export default FormUsuario