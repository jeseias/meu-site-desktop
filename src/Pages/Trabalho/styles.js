import styled from 'styled-components'

import { PageContainer } from '../../Styles/mixins'

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
  }
`

export const Trabalhos = styled.section`
  display: ${props => `${props.show ? 'block' : 'none'}`};
`

export const NovoTrabalhos = styled.section`
  display: ${props => `${props.show ? 'block' : 'none'}`};
`