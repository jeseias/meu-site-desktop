import React from 'react'

// Images
import me2 from '../../assets/me2.jpg'

// Styles
import { MainTitle } from '../../Styles/typografy' 
import { AwesomeBTN } from '../../Styles/components' 
import { Container, FormInput } from './styles'

export default () => 
  <Container img={me2}> 
    <div className="loginBox">
      <MainTitle> Seja bem vindo de Volta <div id="infinity"></div> </MainTitle>

      <form>
        <FormInput type="text" placeholder="Seu email aqui"/>
        <FormInput type="password" placeholder="Seu senha aqui"/>
        <AwesomeBTN> Entrar </AwesomeBTN>
      </form>
    </div>
    <div className="imgBox" /> 
  </Container>