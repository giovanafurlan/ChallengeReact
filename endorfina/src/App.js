import React from 'react'
import { Route, Switch } from 'react-router'
import FormUsuario from './components/formusuario/FormUsuario'
import ListaUsuario from './components/listausuario/ListaUsuario'
import Menu from './components/menu/Menu'
import { Container } from './styled'

export default function App() {
   return(
      <Container>

         <Switch>
            <Route path="/" exact component={ListaUsuario}></Route>
            <Route path="/inclui" component={FormUsuario}></Route>
            <Route path="/edita/:codigo" component={FormUsuario}></Route>
         </Switch>

         <Menu/>
      </Container>
)}