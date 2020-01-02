import styled from 'styled-components';

import { positionAbsoluteCenter, smoothTransition } from '../../Styles/mixins'
import { backgrounColor, tertiaryColor } from '../../Styles/variables'

export const Container = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  overflow: hidden; 
  z-index: 100;

  main {
    ${positionAbsoluteCenter(50,57)};
    width: 40%;
    height: 500px;
    background: #fff;
    overflow: visible;
    color: ${backgrounColor};

    .close {
      position: absolute;
      top: -33px;
      right: 4px;
      color: #fff;
      ${smoothTransition};

      &:hover {
        cursor: pointer;
        color: ${tertiaryColor};
      }
    }

    h1 {
      color: ${backgrounColor};
    }

    .text {
      font-weight: bold;
      font-size: 1.2rem;
      text-align: center;
      padding: 1rem;
    }
  }
`;
