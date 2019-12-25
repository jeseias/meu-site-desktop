import React, { useState } from 'react'

import TabSwitch from '../../components/TabSwitch'

import { Container, NovoTrabalhos, Trabalhos } from './styles'


const ComponentA = () => <h2 title="Component A">This is components A</h2>
const ComponentB = () => <h2 title="Component B">This is components B</h2> 

export default () => {
  const [tabItems, setItems] = useState([
    { name: 'Trabalhos', active: true, id: "trabalhos" },
    { name: 'Novo Trabalho', active: false, id: "novotrabalho" } 
  ])  

  const changeItems = name => {
    const newItems = tabItems.map( item => {
      if( item.name === name) {  
        return {...item, active: true};
      } else { 
        return {...item, active: false}
      }
    }) 
    setItems(newItems)
  }

return ( 
  <Container className="PageContent">
    <TabSwitch elements={tabItems} changeItems={changeItems} component={ComponentA} /> 
    <main className="trabalhosMain"> 
      <Trabalhos id="trabalhos">
        <h1> Component One</h1>
      </Trabalhos>
      <NovoTrabalhos id="novotrabalho">
        <h2> Component two</h2>
      </NovoTrabalhos> 
    </main>
  </Container>
)
}
