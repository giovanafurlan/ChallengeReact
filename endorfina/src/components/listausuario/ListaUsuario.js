import React, { useEffect, useState } from 'react'

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

    const handle


   return(
      <div>
          <h1>Lista de Usuários</h1>
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
                      <th>***</th>
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