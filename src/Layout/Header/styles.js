import styled from 'styled-components'

import { secondaryColor, tertiaryColor, backgrounColor } from '../../Styles/variables'
import { centerContent, smoothTransition } from '../../Styles/mixins'

export const Header = styled.header`
  width: 100%;
  height: 75px;
  background: ${secondaryColor};
  border-bottom: 2px solid ${tertiaryColor};
  padding: .2rem 2rem;
  position: relative;
`

export const ProfileSettings = styled.div`
  width: 300px;
  height: 90%;
  position: absolute;
  top: 3%;
  right: 10%; 
  ${centerContent}; 
  flex-direction: row;

  img {
    display: block;
    width: 61px;
    height: 92%;
    background: #fff; 
    border-radius: 100%; 
    margin-right: .4rem;
  }

  p {
    position: relative;  
    color: ${tertiaryColor};
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 1.1rem; 
    left: -.5rem;
  }

  .caret{
    color: #fff; 
    ${smoothTransition}; 

    &:hover {
      color: ${tertiaryColor};
      cursor: pointer;
    }
  }
`

export const DropDownMenu = styled.ul`
  ${smoothTransition};
  list-style: none;
  position: absolute;
  top: 60%;
  background: ${secondaryColor};
  right: 190px;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem ${backgrounColor};
  width: 200px;
  text-align: right;
  opacity: 0;

  ${props => props.display ? 'opacity: 1; top: 75%' : ''};

  li {
    ${smoothTransition};  

    a {
      display: block;
      width: 100%;
      height: 100%;
      padding: .3rem;
    }

    &:hover {
      background: ${backgrounColor};
      cursor: pointer;
    }
  }
`