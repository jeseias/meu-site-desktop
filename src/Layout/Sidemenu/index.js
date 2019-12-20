import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'

import { Container, Menu } from './styles'

export default () => {
  const [display, setDisplay] = useState(false)
  const [links, setLinks] = useState([
    { to: '/pages/dashboard', name: 'Início', active: true },
    { to: '/pages/services',name: 'Serviços', active: false },
    { to: '/pages/clientes',name: 'Clientes', active: false },
    { to: '/pages/messages',name: 'Mensagens', active: false },
    { to: '/pages/profile',name: 'Perfil', active: false }
  ]) 

  // Change the active link
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

  const handleHideMenu = () => {
    document.querySelector('.PageContent').classList.toggle('active')
    setDisplay(!display)
  }


return( 
  <Container display={display}>
    <header> 
      <FaBars size={26} onClick={() => handleHideMenu()}/>
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