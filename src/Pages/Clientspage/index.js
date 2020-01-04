import React, { useState, useMemo } from 'react';

import api from '../../services/api'

import TabSwitch from '../../components/TabSwitch'
import ImageInput from '../../components/ImageInput'

import { TabContentContainer, FormInput, AwesomeBTN, FormArea } from '../../Styles/components'
import { Container } from './styles';

export default  () => {
  const [clientsShow, setShowClient] = useState(true)
  const [clientsNovoShow, setShowNovoClient] = useState(false)
  const [tabItems, setItems] = useState([
    { name: 'Clients', active: true, id: 'clientes' },
    { name: 'Adicionar', active: false, id: 'novoclientes' }
  ])

  const [thumbnail, setThumbnail] = useState(null)
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [email, setEmail] = useState('')
  const [work, setWork] = useState('')
  const [saying, setSaying] = useState('')

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null
  }, [thumbnail])
  
  const changeItems = ({name,id}) => {
    const newItems = tabItems.map( item => {
      if( item.name === name) { 
        if (id === 'clientes')  {
          setShowClient(true)
          setShowNovoClient(false)
        } else {
          setShowClient(false)
          setShowNovoClient(true)
        }
        return {...item, active: true};
      } else { 
        return {...item, active: false}
      }
    }) 
    setItems(newItems)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try { 
      const data = new FormData()

      data.append('thumbnail', thumbnail)
      data.append('name', name)
      data.append('work', work)
      data.append('amount', amount)
      data.append('email', email)
      data.append('saying', saying)


      await api.post('/clients', data) 
      alert(`O client ${name} foi adicionado com succeso`)
    } catch(err) {
      alert("Occorreu um erro ao adicionar, tenta de novo")
    }
  }

return ( 
  <Container className="PageContent">
    <TabSwitch elements={tabItems} changeItems={changeItems} />
    <main> 
      <TabContentContainer show={clientsShow}>
        <h1>All my clients are here</h1>
      </TabContentContainer>
      <TabContentContainer show={clientsNovoShow}>
        <form onSubmit={handleSubmit}>
          <ImageInput cl="img" bgImg={preview} thumbnail={thumbnail} setThumbnail={setThumbnail} />
          <FormInput placeholder="Nome do client" type="text" value={name} onChange={e => setName(e.target.value)}/>
          <FormInput placeholder="Email" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
          <FormInput placeholder="Quantidade" type="number" value={amount} onChange={e => setAmount(e.target.value)}/>
          <FormInput placeholder="Ramo do client" type="text" value={work} onChange={e => setWork(e.target.value)}/>
          <FormArea placeholder="Dizer do client" value={saying} onChange={e => setSaying(e.target.value)}/>
          <AwesomeBTN type="submit" className="btn1"> Adicionar </AwesomeBTN>
        </form>
      </TabContentContainer> 
    </main>
  </Container>
)
}