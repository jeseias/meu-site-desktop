import React from 'react';

import api from '../../services/api'

import { MdClose } from 'react-icons/md'

import { SecondTitle } from '../../Styles/typografy'
import { Container } from './styles';

export default ({ info: { name, msg, _id }, info, show, toggleModal}) => {

  const handleClose = async id => {
    toggleModal() 
    await api.patch(`/msg/${id}`, info) 
  } 

  return ( 
    <Container show={show}> 
      <main>
        <MdClose className="close" size={30} onClick={() => handleClose(_id)} /> 
        <SecondTitle>{ name }</SecondTitle> 
        <p className="text">
          {msg} 
        </p>
      </main>
    </Container>
  )
}
