import styled from 'styled-components'

import { tertiaryColor } from './variables'

export const MainTitle = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  font-weight: normal;
  position: relative;  

  #infinity {
      position: relative;
      width: 212px;
      height: 100px;
      box-sizing: content-box;
      transform: scale(.19);
      display: block;
      margin: 0 auto;
      top: -40px;
    }
    #infinity:before,
    #infinity:after {
      content: "";
      box-sizing: content-box;
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 60px;
      border: 13px solid ${tertiaryColor};
      border-radius: 50px 50px 0 50px;
      transform: rotate(-45deg); 
    }
    #infinity:after {
      left: auto;
      right: 0;
      border-radius: 50px 50px 50px 0;
      transform: rotate(45deg);
    } 
  
`

export const SecondTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  font-weight: normal;
  position: relative;  
  margin: 3rem; 
  min-height: 60px;

  &::after  {
    display: block;
    content: '';
    padding: .3rem;
    border: .2rem solid ${tertiaryColor};
    position: absolute;
    top: 45px;
    left: 50%;
    border-radius: 100%;
  } 
`