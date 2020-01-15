import styled from 'styled-components'

import { PageContainer, CenterElement, SimpleShadow, centerContent } from '../../Styles/mixins'
import { secondaryColor } from '../../Styles/variables'

export const Container = styled.div`
  ${PageContainer};
  display: grid;
  grid-template-rows: 7% auto;

  main {
    width: 100%;
    background: #fff;
    position: relative;

    > * {
      padding: 1rem;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0; 
    }

    form {
      height: 100%;
      width: 70%;
      display: block;
      margin: 0 auto; 
      color: ${secondaryColor};

      > * {
        ${CenterElement}; 
        width: 450px;
      }

      input {
        color: ${secondaryColor};
      }

      .img {
        height: 300px;
        border-radius: 0;
        ${SimpleShadow}; 
      }
    }
  }
`

export const Trabalhos = styled.section`
  display: ${props => `${props.show ? 'block' : 'none'}`};

  .noTrabalho {
    ${centerContent};
    height: 100%; 
    color: ${secondaryColor}; 
  } 
`

export const NovoTrabalhos = styled.section`
  display: ${props => `${props.show ? 'block' : 'none'}`};
`

export const TrabalhosBox = styled.div` 
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  grid-template-rows: repeat( 8, 240px);
  grid-gap: 0rem;
  overflow-y: scroll;
  height: 740px;
` 