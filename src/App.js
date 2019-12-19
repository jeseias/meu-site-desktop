import React from 'react';
import { BrowserRouter } from 'react-router-dom'

// Pages
import Pages from './Pages/routes'

// Styles
import GlobalStyles from './Styles/GlobalStyles'

export default () => 
  <BrowserRouter>
    <Pages />
    <GlobalStyles /> 
  </BrowserRouter>