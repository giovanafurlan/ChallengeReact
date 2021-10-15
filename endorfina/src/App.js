import React from 'react'
import { Route, Switch } from 'react-router'

import Menu from './components/menu/Menu'
import { Container } from './styled'

export default function App() {
   return(
      <Container>
         <Menu/>
      </Container>
)}