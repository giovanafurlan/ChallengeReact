import React from 'react'
import Menu from './components/menu/Menu'
import Rodape from './components/rodape/Rodape'
import { Container } from './styled'

export default function App() {
   return(
      <Container>
         <Menu/>
         <Rodape/>
      </Container>
)}