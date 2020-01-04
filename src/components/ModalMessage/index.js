import React from 'react';

import api from '../../services/api'

import { MdClose } from 'react-icons/md'
import { FaTrashAlt } from 'react-icons/fa'

import { SecondTitle } from '../../Styles/typografy'
import { Container } from './styles';

export default ({ info: { name, msg, _id, email, tel1, tel2 }, info, show, toggleModal}) => {

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
      <div className="settings"> 
        <MdClose className="close" size={30} onClick={() => handleClose(_id)} /> 
        <FaTrashAlt className='trash' size={20} onClick={() => deleteMessage(_id)}/>
      </div>
      <main>
        <SecondTitle>{ name }</SecondTitle> 
        <p className="text">
          {msg} 
        </p>
      </main>
      <div className="info">
        <div className="name"> Nome: <b>{ name }</b> </div>
        <div className="name"> Email: <b>{ email }</b> </div>
        <div className="name"> Telefone1: <b>{ tel1 }</b> </div>
        <div className="name"> Telefone2: <b>{ tel2 }</b> </div>
      </div>
    </Container>
  )
}
