import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const Lista = styled.div`
`;


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
      <div>
          <h3>Lista de Hobbies</h3>
          <Link to="/incluir">Inserir hobby</Link>
          <table>
              <thead>
                  <tr>
                      <th>Nome</th>
                      <th>Editar</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      hobbies.map((hobby)=> (
                          <tr key={hobby.codigo}>
                              <td>{hobby.nome}</td>
                              <td>
                                  <Link title="Editar" to={`/editar/${hobby.codigo}`}>Editar</Link>
                                  <Link title="Editar" to="/" title="Excluir" onClick={handleDelete.bind(this, hobby.codigo)}>Excluir</Link>
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
      </div>
      </Lista>
)}

export default ListaHobby