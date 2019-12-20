import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'

import { Container, Menu } from './styles'

export default () => {
  const [display, setDisplay] = useState(false)
  const [links, setLinks] = useState([
    { to: '/dashboard', name: 'Início', active: true },
    { to: '/services',name: 'Serviços', active: false },
    { to: '/clientes',name: 'Clientes', active: false },
    { to: '/messages',name: 'Mensagens', active: false },
    { to: '/profile',name: 'Perfil', active: false }
  ]) 

  const handleChangeLink = name => {  
    const newItems = links.map( item => {
      if( item.name === name) { 
        return {...item, active: true};
      } else { 
        return {...item, active: false}
      }
    }) 
    setLinks(newItems)   
  }  


return( 
  <Container display={display}>
    <header> 
      <FaBars size={26} onClick={() => setDisplay(!display)}/>
    </header>
    <Menu>
      {links.map(link => 
        <Link 
          key={link.name} 
          to={link.to} 
          className={ link.active ? 'active' : '' }
          onClick={() => handleChangeLink(link.name)}
        >
          {link.name}
        </Link>)}
    </Menu>
  </Container>  
)
}