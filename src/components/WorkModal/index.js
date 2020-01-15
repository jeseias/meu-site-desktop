import React, { useState, useEffect } from 'react';

import api from '../../services/api'

import { MdClose } from 'react-icons/md' 

import ImageInput from '../../components/ImageInput'

import { FormInput, AwesomeBTN } from '../../Styles/components'
import { Container } from './styles';

export default ({ show, setModal, modalData }) => { 
  const [workName, setName] = useState('')
  const [workLink, setLink] = useState('')
  const [workType, setType] = useState('')

  useState(() => {
    /* setName(name)
    setLink(link)
    setType(type) */
    console.log(modalData) 
  }, [])
  

  return ( 
    <Container show={show}> 
      <div className="settings"> 
        <MdClose className="close" size={30} onClick={() => setModal(false)} />  
      </div>
      <form>
        <ImageInput />
        <FormInput 
          placeholder="Nome do trabalho" 
          onChange={() => {}}
          value=''
        />
        <FormInput 
          placeholder="Tipo de projecto"
          onChange={() => {}}
          value=''
        />
        <FormInput 
          placeholder="Link do site" 
          onChange={() => {}}
          value=''
        />
        <AwesomeBTN type='submit'>Atualizar</AwesomeBTN>
      </form>
    </Container>
  )
}