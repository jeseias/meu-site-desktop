import React, { useState, useMemo, useEffect } from 'react'

import api from '../../services/api' 

import TabSwitch from '../../components/TabSwitch'
import ImageInput from '../../components/ImageInput'
import WorkBox from '../../components/WorkBox'
import WorkModal from '../../components/WorkModal'

import {  FormInput, AwesomeBTN  } from '../../Styles/components'
import { Container, NovoTrabalhos, Trabalhos, TrabalhosBox } from './styles' 

export default () => {
  const [showTrabalho, setShowTrabalho] = useState(true)
  const [showNovoTrabalho, setShowNovoTrabalho] = useState(false)
  const [tabItems, setItems] = useState([
    { name: 'Trabalhos', active: true, id: "trabalhos" },
    { name: 'Adicionar', active: false, id: "novotrabalho" } 
  ]) 

  const [showModal, setModal] = useState(false) 
  const [modalData, setModalData] = useState('null') 
  
  const [trabalhos, setTrabalhos] = useState(false) 
 
  const [thumbnail, setThumbnail] = useState(null) 
  const [name, setName] = useState('') 
  const [link, setLink] = useState('')
  const [type, setType] = useState('')

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null 
  },[thumbnail]) 

  useEffect(() => {
    async function loadWorks() { 
      const res = await api.get('/works') 
      setTrabalhos(res.data) 
    }
    loadWorks()
  }, [trabalhos])

  async function handleSubmit(e) {
    e.preventDefault()

    try { 
      const data = new FormData()  
       
      data.append('thumbnail', thumbnail)
      data.append('name', name)
      data.append('link', link)
      data.append('type', type) 
  
      await api.post('/work', data) 
      alert(`O trabalho ${name} foi adicionado com succeso`)
    } catch (error) {
      alert("Occorreu um erro ao adicionar, tenta de novo")
    }

  }

  const changeItems = ({name,id}) => {
    const newItems = tabItems.map( item => {
      if( item.name === name) { 
        if (id === 'trabalhos')  {
          setShowTrabalho(true)
          setShowNovoTrabalho(false)
        } else {
          setShowTrabalho(false)
          setShowNovoTrabalho(true)
        }
        return {...item, active: true};
      } else { 
        return {...item, active: false}
      }
    }) 
    setItems(newItems)
  } 

  const showModalWithData = async id => {
    const data = await api.get(`/works/${id}`)   
    setModalData(data.data)
    setModal(true)  
  }  

  return ( 
    <Container className="PageContent">
      <TabSwitch elements={tabItems} changeItems={changeItems} /> 
      <main className="trabalhosMain"> 
        <Trabalhos show={showTrabalho}> 
        <WorkModal show={showModal} setModal={setModal} modalData={modalData} />
          {
            trabalhos 
              ? 
                <TrabalhosBox>
                  {
                    trabalhos.map( work => 
                      <WorkBox 
                        setModal={showModalWithData}
                        key={work.id} 
                        work={work} 
                      /> 
                    )
                  }
                </TrabalhosBox> 
              :
                <div className="noTrabalho">
                  <h1> Não tem trabalho !</h1>
                </div>  
          }
        </Trabalhos>
        <NovoTrabalhos show={showNovoTrabalho}>
          <form onSubmit={handleSubmit}>  
            <ImageInput cl="img" bgImg={preview} thumbnail={thumbnail} setThumbnail={setThumbnail} />
            <FormInput placeholder="Nome do trabalho" type="text" value={name} onChange={e => setName(e.target.value)}/>
            <FormInput placeholder="Tipo de projecto" type="text" value={type} onChange={e => setType(e.target.value)}/>
            <FormInput placeholder="Link do site" type="text" value={link} onChange={e => setLink(e.target.value)}/>
            <AwesomeBTN type="submit" className="btn1"> Adicionar </AwesomeBTN>
          </form>
        </NovoTrabalhos> 
      </main>
    </Container>
  )
} 
