import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'

import { Container, Menu } from './styles'

export default () => {
  const [links] = useState([
    { name: 'Início', active: true },
    { name: 'Serviços', active: false },
    { name: 'Clientes', active: false },
    { name: 'Mensagens', active: false },
    { name: 'Perfil', active: false },
  ])

return( 
  <Container>
    <header> 
      <FaBars size={26}/>
    </header>
    <Menu>
      {links.map(link => 
        <Link 
          key={link.name} 
          to={link.name} 
          className={ link.active ? 'active' : '' }
        >
          {link.name}
        </Link>)}
    </Menu>
  </Container>  
)
}