import React from 'react'
import { Switch, Route }from 'react-router-dom' 

import Header from '../Layout/Header'
import Sidemnu from '../Layout/Sidemenu'

import Loginpage from './Login'
import Dashboard from './Dashboard' 
import Profile from './Profile'

export default () =>
<>
  <Header />
  <Sidemnu />
  <Switch>
    <Route exact path='/' component={Loginpage}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path='/profile' component={Profile}/>
  </Switch>
</>