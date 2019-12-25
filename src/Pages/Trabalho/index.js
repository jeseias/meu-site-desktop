import React, { useState } from 'react'

import TabSwitch from '../../components/TabSwitch'

import { Container, NovoTrabalhos, Trabalhos } from './styles' 

export default () => {
  const [showTrabalho, setShowTrabalho] = useState(true)
  const [showNovoTrabalho, setShowNovoTrabalho] = useState(false)
  const [tabItems, setItems] = useState([
    { name: 'Trabalhos', active: true, id: "trabalhos" },
    { name: 'Adicionar', active: false, id: "novotrabalho" } 
  ])  

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

return ( 
  <Container className="PageContent">
    <TabSwitch elements={tabItems} changeItems={changeItems} /> 
    <main className="trabalhosMain"> 
      <Trabalhos show={showTrabalho}>
        <h1> Component One</h1>
      </Trabalhos>
      <NovoTrabalhos show={showNovoTrabalho}>
        <form>
          
        </form>
      </NovoTrabalhos> 
    </main>
  </Container>
)
} 
