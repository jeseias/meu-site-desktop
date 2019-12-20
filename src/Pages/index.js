import React from 'react'
import { Switch, Route }from 'react-router-dom' 

import Header from '../Layout/Header'
import Sidemnu from '../Layout/Sidemenu' 


import Dashboard from './Dashboard' 
import Profile from './Profile'

export default () =>
<>
  <Header />
  <Sidemnu />
  <Switch> 
    <Route path='/pages/dashboard' component={Dashboard}/> 
    <Route path='/pages/profile' component={Profile}/>
  </Switch>
</>