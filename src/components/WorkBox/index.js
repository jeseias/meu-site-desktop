import React from 'react';

import { Container } from './styles';

export default ({work: { name, thumbnail_url }}) => 
  <Container bg={thumbnail_url}>
    <h2>{name}</h2>  
  </Container>