import React, { useState, useEffect } from 'react';

import api from '../../services/api'

import Modal from '../../components/Modal'

import { MainTitle } from '../../Styles/typografy' 
import { Container, MessageContainer } from './styles';

export default () => {
  const [messages, setMessages] = useState([])
  const [info, setModalInfo] = useState({})
  const [display, setDisplay] = useState(false)

  useEffect(() => { 
    async function loadMessages() {
      const data = await api.get('/msg')
      setMessages(data.data)
    }
    loadMessages()
  }, [])

  const handleMessage = async el => {
    setDisplay(!display)  
    const msg = await api.get(`/msg/${el._id}`) 
    setModalInfo(msg.data)
  }

  const toggleModal = () => setDisplay(!display)

  return ( 
    <Container className="PageContent" total={messages.length}>
      <MainTitle> Mensagens <div id="infinity"></div> </MainTitle>
      <Modal info={info} show={display} toggleModal={toggleModal}/>
      <div className="messagebox">
        {
          messages.map( msg => 
            <MessageContainer key={msg._id} onClick={() => handleMessage(msg)}> 
              <h2 className="name">{msg.name}</h2>
              <div className={msg.read ? 'date' : 'date read'} onClick={() => handleMessage(msg)}>
                { msg.read ? 'Já lido' : 'Não Lido' }
              </div>
              <div className="msg">
                {msg.msg.split('').map( (l, i) => {
                    const saying = []
                    if (i < 80) saying.push(l)  
                    return `${saying.toString()}` 
                })}...
              </div>
            </MessageContainer>
          )
        }
      </div>
    </Container>
  )
}
