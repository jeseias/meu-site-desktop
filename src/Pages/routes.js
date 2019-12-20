import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages 
import PageContainer from '../Layout/PageContainer' 
import Loginpage from './Login'

export default () => 
  <Switch>   
    <Route path='/pages' component={PageContainer}/>
    <Route exact path='/' component={Loginpage}/>
  </Switch>