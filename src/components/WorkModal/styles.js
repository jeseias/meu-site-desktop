import styled from 'styled-components';

import { smoothTransition, centerContent } from '../../Styles/mixins'
import { tertiaryColor } from '../../Styles/variables'

export const Container = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, .5);
  z-index: 100;
  transform: none; 


  form {
    display: block;
    margin: 30% auto;
    position: relative;
    top: 200px;
    background: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 30% !important;
    height: 600px !important;
    border-radius: 1rem;
    box-shadow: 0 0 5rem rgba(0,0,0, .5); 
    padding-top: 2rem;

    .img {
      display: block;
      margin: 0 auto;
      border-radius: 0;
      border: 1px solid #999;
      height: 300px;
      margin: 1rem;
      width: 80%;
      left: 45px;
      position: relative; 
      padding: 0;
    }
  }

  .settings {
    position: relative; 
    display: block; 
    margin: 6% auto;
    width: 30% !important;
    height: 30px;
    top: 50px; 

    .close {
      position: absolute; 
      right: 10px;
      color: #fff;
      ${smoothTransition};

      &:hover {
        cursor: pointer;
        color: ${tertiaryColor};
      }
    } 
  }
`;
