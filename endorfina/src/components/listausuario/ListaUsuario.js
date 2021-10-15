import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ListaUsuario() {

    const [usuarios, setUsuarios]= useState([])

    useEffect(() => {
        fetch("/rest/usuario").then((resp)=> {
            return resp.json()
        }).then((resp)=> {
            setUsuarios(resp)
            console.log(resp)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    const handleDelete= (codigo)=>{
        fetch("/rest/usuario/"+codigo,{
            method: "delete"
        }).then(()=>{
                window.location="/"
        }).catch((error)=>{
            console.log(error)
        })
    }


   return(
      <div>
          <h3>Lista de Usuários</h3>
          <table>
              <thead>
                  <tr>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Telefone</th>
                      <th>Data de Nascimento</th>
                      <th>Estado</th>
                      <th>Cidade</th>
                      <th>Senha</th>
                      <th>Editar</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      usuarios.map((usuario)=> (
                          <tr key={usuario.codigo}>
                              <td>{usuario.nome}</td>
                              <td>{usuario.email}</td>
                              <td>{usuario.telefone}</td>
                              <td>{usuario.dataNascimento}</td>
                              <td>{usuario.estado}</td>
                              <td>{usuario.cidade}</td>
                              <td>{usuario.senha}</td>

                              <td>
                                  <Link title="Editar" to={`/editar/${usuario.codigo}`}>Editar</Link>
                                  <Link title="Editar" to="/" title="Excluir" onClick={handleDelete.bind(this, usuario.codigo)}>Ecluir</Link>
                              </td>
                          </tr>
                      ))}
              </tbody>
              <tfoot>
                    <tr>
                        <td colSpan='4'>Usuários API</td>
                    </tr>
              </tfoot>
          </table>
      </div>
)}

export default ListaUsuario