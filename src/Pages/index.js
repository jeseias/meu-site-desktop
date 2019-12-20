import React from 'react'
import { Switch, Route }from 'react-router-dom' 

import Header from '../Layout/Header'
import Sidemnu from '../Layout/Sidemenu' 


import Dashboard from './Dashboard' 
import Profile from './Profile'
import Service from './Servicepage'
import Clientes from './Clientspage'

export default () =>
<>
  <Header />
  <Sidemnu />
  <Switch> 
    <Route path='/pages/dashboard' component={Dashboard}/> 
    <Route path='/pages/profile' component={Profile}/>
    <Route path='/pages/services' component={Service}/>
    <Route path='/pages/clientes' component={Clientes}/>
  </Switch>
</>