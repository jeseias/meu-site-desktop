import React from 'react';

import api from '../../services/api'

import { MdClose } from 'react-icons/md'
import { FaTrashAlt } from 'react-icons/fa'

import { SecondTitle } from '../../Styles/typografy'
import { Container } from './styles';

export default ({ info: { name, msg, _id }, info, show, toggleModal}) => {

  const handleClose = async id => {
    toggleModal() 
    if (!info.read)  await api.patch(`/msg/${id}`, info) 
  } 

  const deleteMessage = async id => {
    toggleModal()
    await api.delete(`/msg/${id}`)
  }

  return ( 
    <Container show={show}> 
      <main>
        <MdClose className="close" size={30} onClick={() => handleClose(_id)} /> 
        <SecondTitle>{ name }</SecondTitle> 
        <p className="text">
          {msg} 
        </p>
        <FaTrashAlt className='trash' size={20} onClick={() => deleteMessage(_id)}/>
      </main>
    </Container>
  )
}
