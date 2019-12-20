import React from 'react' 

import { MainTitle } from '../../Styles/typografy'
import { ContentBox, FormInput, FormArea  } from '../../Styles/components'
import { Container } from './styles'

export default () =>
  <Container className="PageContent"> 
    <form>
      <MainTitle> Sobre <div id="infinity"></div> </MainTitle>
      <ContentBox className="me"> 
        <div className="img">
            <img alt=""/>
        </div> 
        <div className="details">
          <h3>Jeseías Domingos</h3>
          <p className="location"> 
            <FormInput name="location" placeholder="location" type="text"/>
          </p>
          <FormArea name="info1" placeholder="Information one" />
          <FormArea name="info2" placeholder="Information two" /> 
        </div>
      </ContentBox>
    </form>
  </Container>