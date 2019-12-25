import React from 'react';

import { Container } from './styles';

export default (props) => {
  const menuItems = props.elements

return (
  <Container items={menuItems.length}>
    <header>
      {menuItems.map( item => 
        <h1 className={item.active ? 'active' : ''}>{item.name}</h1>
      )}
    </header>
  </Container> 
)
}
