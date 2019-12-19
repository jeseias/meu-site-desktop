import { createGlobalStyle } from 'styled-components'

import { tertiaryColor, darkGray } from './variables'
import { centerContent, positionAbsoluteCenter } from './mixins'


export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Poppins:100,300,500,700&display=swap');

  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;   
  }

  html, body, #root {
    min-height: 100vh;
    width: 100vw; 
    overflow-x: hidden; 
  }

  body, button, input {
    font-family: 'Poppins' , Arial, Helvetica, sans-serif;
  }

  html {
    font-size: 14px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }  

  .progress {
      width: 100%;
      ${centerContent}
      position: relative;
      margin-bottom: 2rem;

      span { 
        ${positionAbsoluteCenter(50,50)};
        position: absolute;
        display: block;
        font-size: 1rem; 
        color: ${darkGray}; 
      }
      progress {
        border-radius: 2px; 
        width: 100%;
        height: 22px; 
      }
      progress::-webkit-progress-bar {
        background-color: #f4f4f4;
        border-radius: 2px; 
      }
      progress::-webkit-progress-value {
        border-radius: 2px; 
        background: ${tertiaryColor};
      } 
    }
`

