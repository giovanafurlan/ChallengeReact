import React from 'react'
import { Base } from '../../styled'

export default function Rodape() {
   return(
      <Base>
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
         <a href= "#"><i class="fab fa-instagram"></i></a>
            <a href= "#"><i class="fab fa-facebook"></i></a>
            <a href= "#"><i class="fab fa-twitter"></i></a>
         <div>
            <p class="copyright">&copy; Copyright Endorfina - 2021</p>
         </div>
      </Base>
)}