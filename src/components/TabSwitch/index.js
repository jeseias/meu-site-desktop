import React from 'react';

import { Container } from './styles';

export default ({ elements, changeItems }) => { 

return (
  <Container items={elements.length}>
    <header>
      {elements.map( item => 
        <h1 key={item.id} className={item.active ? 'active' : ''} onClick={() => changeItems(item.name)}>{item.name}</h1>
      )}
    </header> 
  </Container> 
)
}
