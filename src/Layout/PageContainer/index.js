import React from 'react'
import { Route } from 'react-router-dom'

// Pages
import Loginpage from '../../Pages/Login'

import { PageContainer } from './styles'

export default () => 
  <PageContainer>
    <Route exact path='/' component={Loginpage}/>
  </PageContainer>