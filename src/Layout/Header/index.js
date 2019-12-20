import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaCaretDown } from 'react-icons/fa'

import { Header, ProfileSettings, DropDownMenu } from './styles'

export default () =>  {
  const [display, setDisplay] = useState(false)

return ( 
  <Header>
    <ProfileSettings>
      <p> Domingos, Jeseias </p>
      <img src="" alt=""/>
      <FaCaretDown size={16} className='caret' onClick={() => setDisplay(!display)}/>
    </ProfileSettings>
    <DropDownMenu display={display} onMouseLeave={() => setDisplay(!display)}>
      <li> <Link to='/profile'>Perfil</Link> </li>
      <li> <Link to='/'>Sair</Link> </li>
    </DropDownMenu> 
  </Header>
)
}