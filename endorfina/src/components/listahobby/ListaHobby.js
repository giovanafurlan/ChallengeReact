import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const Lista = styled.div`
    text-align: center;

    table{
        border: solid 2px #0078b3;
        align-items: center;
        margin: auto;
        padding: 10vh;
    }

    h3{
        margin: 3vh;
    }
`

function ListaHobby() {

    const [hobbies, setHobbies]= useState([])

    useEffect(() => {
        fetch("/rest/hobby/").then((resp)=> {
            return resp.json()
        }).then((resp)=> {
            setHobbies(resp)
            console.log(resp)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    const handleDelete= (codigo)=>{
        fetch("/rest/hobby/"+codigo,{
            method: "delete"
        }).then(()=>{
                window.location="/"
        }).catch((error)=>{
            console.log(error)
        })
    }

   return(
       <Lista>
          <h3>Lista de Hobbies</h3>
          <Link to="/incluir" className="inclui">Inserir hobby</Link>
          <table>
              <thead>
                  <tr>
                      <th>Nome</th>
                      <th>Editar</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      hobbies.map((nome)=> (
                          <tr key={nome.codigo}>
                              <td>{nome.nome}</td>
                              <td>
                                  <Link title="Editar" to={`/editar/${nome.codigo}`}>Editar</Link>
                                  <Link title="Editar" to="/" title="Excluir" onClick={handleDelete.bind(this, nome.codigo)}>Excluir</Link>
                              </td>
                          </tr>
                      ))}
              </tbody>
              <tfoot>
                    <tr>
                        <td colSpan='4'>Hobbies API</td>
                    </tr>
              </tfoot>
          </table>
      </Lista>
)}

export default ListaHobby