import styled from 'styled-components';

import { secondaryColor, tertiaryColor, lightGray } from '../../Styles/variables'
import { centerContent, smoothTransition } from '../../Styles/mixins'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: ${secondaryColor};
  z-index: 10;
  box-shadow: 0 0 1rem #000;

  header {
    height: 80px; 
    width: 100%;
    ${centerContent};
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 1rem 0 3rem;
    color: #fff;

    > * { 
      ${smoothTransition};

      &:hover {
        color: ${tertiaryColor};
        cursor: pointer;
      }
    }
  }
`;

export const Menu = styled.div`
  ${centerContent};
  padding-top: 5rem;

  a {
    background: ${lightGray};
    color: #000;
    width: 100%;
    padding: 1.8rem 1rem; 

    &.active {
      border-right: 3px solid ${tertiaryColor};
    }
  }
`