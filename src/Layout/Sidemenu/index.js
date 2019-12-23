import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'

import { Container, Menu } from './styles'

export default () => {
  const [display, setDisplay] = useState(false)
  const [links] = useState([
    { name: 'Início', active: true },
    { name: 'Serviços', active: false },
    { name: 'Clientes', active: false },
    { name: 'Trabalhos', active: false },
    { name: 'Mensagens', active: false },
    { name: 'Perfil', active: false }
  ])

return( 
  <Container display={display}>
    <header> 
      <FaBars size={26} onClick={() => setDisplay(!display)}/>
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