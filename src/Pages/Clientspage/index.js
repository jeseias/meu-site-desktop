import React, { useState } from 'react';

import TabSwitch from '../../components/TabSwitch'

import { TabContentContainer } from '../../Styles/components'
import { Container } from './styles';

export default  () => {
  const [clientsShow, setShowClient] = useState(true)
  const [clientsNovoShow, setShowNovoClient] = useState(false)
  const [tabItems, setItems] = useState([
    { name: 'Clients', active: true, id: 'clientes' },
    { name: 'Adicionar', active: false, id: 'novoclientes' }
  ])
  
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

return ( 
  <Container className="PageContent">
    <TabSwitch elements={tabItems} changeItems={changeItems} />
    <main> 
      <TabContentContainer show={clientsShow}>
        <h1>All my clients are here</h1>
      </TabContentContainer>
      <TabContentContainer show={clientsNovoShow}>
        <h1>Add a new client</h1>
      </TabContentContainer> 
    </main>
  </Container>
)
}