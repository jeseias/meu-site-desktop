import styled from 'styled-components';

import { secondaryColor, backgrounColor, tertiaryColor } from '../../Styles/variables'
import { smoothTransition } from '../../Styles/mixins'

export const Container = styled.div`
  width: 100%;
  height: 100%; 
  border: 2px solid #fff;
  border-top: none;

  header {
    background: #fff;
    color: ${secondaryColor};
    display: grid;
    grid-template-columns: ${props => `repeat(${props.items}, 1fr)`};
    padding: 0;  

    h1 {
      padding: 1rem .3rem;
      text-align: center;
      ${smoothTransition};
      overflow: visible;

      &.active {
        background: ${secondaryColor};
        border-bottom: 2px solid ${tertiaryColor};
        border-left: 2px solid ${tertiaryColor};
        border-right: 2px solid ${tertiaryColor}; 
        color: ${tertiaryColor}; 
      }

      &:hover {
        background: ${secondaryColor};
        cursor: pointer;
        color: #fff;
      }
    }
  }
`;
