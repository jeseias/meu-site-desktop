import React from 'react';

import api from '../../services/api'

import { FaEye, FaTrashAlt } from 'react-icons/fa'

import { Container } from './styles';

export default ({work: { name, thumbnail_url, _id }}) => {

  const deleteTrabalho = async id => { 
    await api.delete(`/works/${id}`)
  }

  return ( 
    <Container bg={thumbnail_url}>
      <FaEye size={30} className='icon'/>
      <FaTrashAlt 
        onClick={() => deleteTrabalho(_id)}
        className='delete' 
        size={22} 
      />
      <h2>{name}</h2>  
    </Container>
  )
}