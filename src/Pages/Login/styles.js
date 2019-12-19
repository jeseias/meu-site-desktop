import styled from 'styled-components';

import { secondaryColor } from '../../Styles/variables'
import { FormElements } from '../../Styles/mixins'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0;
  padding: 105px;
  width: 100vw;
  height: 100vh;
  background: ${secondaryColor};

  > div {
    width: 100%;
    height: 100%;
    padding: 3rem;
  }

  .loginBox {
    background: ${secondaryColor};
    padding: 10rem 5rem;
    box-shadow: -.5rem 0 4rem #000;
    z-index: 10;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem; 

    input {
      margin: 2rem auto;
      text-align: center;
    }

    button {
      display: block;
      margin: 1rem auto;
      width: 200px;

      &:hover {
        background: transparent;
      }
    }
  }

  .imgBox {
    background: ${ props => `url(${props.img})`} no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    box-shadow: .5rem 0 4rem #000;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;

    &::after {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #12171b;
      opacity: .36;
    }
  }
`;

export const FormInput = styled.input`
  ${FormElements};
`
