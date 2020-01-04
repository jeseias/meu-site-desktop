import styled from 'styled-components';

import { PageContainer, smoothTransition } from '../../Styles/mixins'
import { backgrounColor, tertiaryColor, secondaryColor, transparentTertiaryColor } from '../../Styles/variables'

export const Container = styled.div`
  ${PageContainer};

  .messagebox {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: ${props => `repeat(${ Math.round((props.total/3) + 1) }, 150px)`};  
    grid-gap: 1rem;
    overflow-y: scroll;
    height: 720px;  
    padding: 1rem;
    width: 100%; 
    position: relative;
    top: -60px;
  }
`;

export const MessageContainer = styled.div`
  background: ${backgrounColor};
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0,0,0,.5);
  ${smoothTransition};
  padding: 1.5rem;
  display: grid;
  grid-template-columns: auto auto auto 20%;
  grid-template-areas: 
    "name name name name"
    "msg  msg msg msg" 
    "msg  msg msg msg" 
    ". . . date" ; 

  .name {
    grid-area: name;
    text-align: left;
    color: ${tertiaryColor};
    padding: 1rem 0;
  }

  .msg {
    grid-area: msg;
  }

  .date {
    grid-area: date;
    background: ${secondaryColor};
    font-weight: bold;
    padding: .3rem .7rem;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 0 .5rem #000;
    ${smoothTransition};

    &:hover {
      background: ${tertiaryColor}; 
    } 

    &.read {
      box-shadow: 0 0 .2rem ${tertiaryColor};
    }
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
`
