import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import { Topo } from '../../styled'
import { AiOutlineSetting } from "react-icons/ai";
import Home from '../home/Home'
import Ansiedade from '../ansiedade/Ansiedade'
import Hobbies from '../hobbies/Hobbies'
import Cadastro from '../cadastro/Cadastro'
import Login from '../login/Login'
import Perfil from '../perfil/Perfil'
import Perfil2 from '../perfil2/Perfil2'
import ListaHobby from '../listahobby/ListaHobby';
import FormHobby from '../formhobby/FormHobby';
import Perfil3 from '../perfil3/Perfil3';
import Perfil4 from '../perfil4/Perfil4';

export default function Menu() {
   return(
      <Topo>
         <nav>
            <ul>
               <li className="opcao"><Link to="/home">Home</Link></li>
               <li className="opcao"><Link to="/ansiedade">Ansiedade</Link></li>
               <li className="opcao"><Link to="/hobbies">Hobbies</Link></li>
               <li className="cadastro"><Link to="/login">Login</Link></li>
               <li className="cadastro"><Link to="/cadastro">Cadastro</Link></li>
               <div class="dropdown">
               <button class="dropbtn">Perfil</button>
               <div class="dropdown-content">
                  <a><Link to="/perfil">Usuário</Link></a>
               </div>
               </div>
               <li className="opcao"><Link to="/lista"><AiOutlineSetting className="conf"/>Gerenciar</Link></li>
            </ul>
         </nav>
            
         <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/home" component={Home}></Route>
            <Route path="/ansiedade" component={Ansiedade}></Route>
            <Route path="/hobbies" component={Hobbies}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/cadastro" component={Cadastro}></Route>
            <Route path="/perfil" component={Perfil}></Route>
            <Route path="/perfil2" component={Perfil2}></Route>
            <Route path="/perfil3" component={Perfil3}></Route>
            <Route path="/perfil4" component={Perfil4}></Route>
            <Route path="/lista" exact component={ListaHobby}></Route>
            <Route path="/incluir" component={FormHobby}></Route>
            <Route path="/editar/:codigo" component={FormHobby}></Route>
         </Switch>
      </Topo>
)}