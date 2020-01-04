import styled from 'styled-components';

import { centerContent, smoothTransition, positionAbsoluteCenter } from '../../Styles/mixins'
import { tertiaryColor } from '../../Styles/variables'

export const Container = styled.div` 
  background: ${props => `url(${props.bg})`};
  background-size: cover;
  background-position: center;
  ${centerContent};
  position: relative;
  overflow: hidden;

  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0);
    transform: scale(1.5);
    position: absolute;
    top: 0;
    left: 0;
    ${smoothTransition};
  }

  h2, .icon, .delete {
    color: ${tertiaryColor};
    position: relative;
    top: 10px;
    opacity: 0;
    z-index: 10;
    ${smoothTransition};
  } 

  .icon, .delete {
    left: 30%;
    color: #fff;
    top: 160px;
  }

  .delete {
    left: -35%; 
  } 

  &:hover {
    cursor: pointer;

    &::after {
      background: rgba(0,0,0,.8);
    }

    h2, .icon , .delete{
      opacity: 1;
      top: 0;
    } 

    .icon, .delete {
      top: 120px;

      &:hover {
        transform: scale(1.1);
      }
    }

    .delete {
      top: 90px;
    }
  }
`;
