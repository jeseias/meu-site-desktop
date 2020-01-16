import styled from 'styled-components';

import { secondaryColor } from '../../Styles/variables'
import { FormElements } from '../../Styles/mixins'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0;
  padding: 50px;
  width: 100vw;
  height: 100vh;
  background: ${secondaryColor}; 

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 86% 14%;
    grid-gap: 1rem;
    grid-template-areas: 
      'box1 box2'
      'btn btn';

    .box1 {
      grid-area: box1;
    }

    .box2 {
      grid-area: box2;
    }

    .btn {
      grid-area: btn;
    }
  }

  > div {
    width: 100%;
    height: 100%;
    padding: .5rem;
  }

  .img {
    display: block;
    margin: 0 auto;
    width: 305.2px;
    height: 305.2px;
  } 

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
