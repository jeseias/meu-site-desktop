import styled from 'styled-components';

import { positionAbsoluteCenter, smoothTransition } from '../../Styles/mixins'
import { backgrounColor, tertiaryColor, secondaryColor } from '../../Styles/variables'

export const Container = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.5);
  overflow: hidden; 
  z-index: 100;

  .settings {
    ${positionAbsoluteCenter(23.5,57)}; 
    width: 40%;
    height: 28px;

    .close, .trash {
      position: absolute; 
      right: 28px;
      color: #fff;
      ${smoothTransition};

      &:hover {
        cursor: pointer;
        color: ${tertiaryColor};
      }
    }

    .trash { 
      right: 4px; 
      top: 5px; 
    }
  }

  main {
    ${positionAbsoluteCenter(50,57)};
    width: 40%;
    height: 500px;
    background: #fff;
    overflow: visible;
    color: ${backgrounColor}; 
    display: grid;
    grid-template-rows: 13% auto;
    padding: 0;

    h1 {
      color: ${backgrounColor};
      padding: 0;
      margin: 0;
    }

    .text {
      font-weight: bold;
      font-size: 1.2rem;
      text-align: center;
      padding: 1rem; 
      overflow-y: scroll; 
    } 
  }

  .info {
    ${positionAbsoluteCenter(30.6,27)};
    background: #fff;
    padding: 1rem;

  }
`;
