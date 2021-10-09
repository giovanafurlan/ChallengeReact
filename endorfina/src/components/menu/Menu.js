import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import { Topo } from '../../styled'
import Home from '../home/Home'
import Ansiedade from '../ansiedade/Ansiedade'
import Hobbies from '../hobbies/Hobbies'
import Cadastro from '../cadastro/Cadastro'
import Login from '../login/Login'
import Perfil from '../perfil/Perfil'
import Perfil2 from '../perfil2/Perfil2'

export default function Menu() {
   return(
      <Topo>
         <div className="menu">
            <ul>
               <li className="opcao"><Link to="/home">Home</Link></li>
               <li className="opcao"><Link to="/ansiedade">Ansiedade</Link></li>
               <li className="opcao"><Link to="/hobbies">Hobbies</Link></li>
               <li className="cadastro"><Link to="/login">Login</Link></li>
               <li className="cadastro"><Link to="/cadastro">Cadastro</Link></li>
               <li className="perfil"><Link to="/perfil">Perfil</Link></li>
            </ul>
         </div>

         <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/home" component={Home}></Route>
            <Route path="/ansiedade" component={Ansiedade}></Route>
            <Route path="/hobbies" component={Hobbies}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/cadastro" component={Cadastro}></Route>
            <Route path="/perfil" component={Perfil}></Route>
            <Route path="/perfil2" component={Perfil2}></Route>
         </Switch>
      </Topo>
)}