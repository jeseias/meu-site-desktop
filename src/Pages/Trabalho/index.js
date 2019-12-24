import React, { useState } from 'react'

import TabSwitch from '../../components/TabSwitch'

import { Container } from './styles'


const ComponentA = () => <h2 title="Component A">This is components A</h2>
const ComponentB = () => <h2 title="Component B">This is components B</h2>
const ComponentC = () => <h2 title="Component C">This is components C</h2>

export default () => {
  const [tabItems, setItems] = useState([
    { name: 'Component A', active: true },
    { name: 'Component B', active: false },
    { name: 'Component C', active: false }
  ])

return ( 
  <Container className="PageContent">
    <TabSwitch elements={tabItems}>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </TabSwitch>
  </Container>
)
}
