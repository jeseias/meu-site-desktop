import styled from 'styled-components';

import { secondaryColor, tertiaryColor } from '../../Styles/variables'
import { smoothTransition } from '../../Styles/mixins'

export const Container = styled.div`
  width: 100%;   
  background: #fff;

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
      background: ${secondaryColor};
      color: #fff; 

      &.active {
        background: #fff;
        color: ${tertiaryColor};  
        font-weight: bold;  

        &:hover {
          background: #fff;
          color: ${tertiaryColor}; 
        }
      }

      &:hover {  
        cursor: pointer;
        color: #fff; 
      }
    }
  }
`;
