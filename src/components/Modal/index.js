import React from 'react';

import { MdClose } from 'react-icons/md'

import { SecondTitle } from '../../Styles/typografy'
import { Container } from './styles';

export default ({ info: { name, msg }, show, toggleModal}) =>
  <Container show={show}> 
    <main>
      <MdClose className="close" size={30} onClick={() => toggleModal()} /> 
      <SecondTitle>{ name }</SecondTitle> 
      <p className="text">
        {msg} 
      </p>
    </main>
  </Container>
