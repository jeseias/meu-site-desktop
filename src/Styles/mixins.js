import { device } from './device'
import { darkGray, tertiaryColor, primaryColor, primaryColor1, secondaryColor } from './variables' 

// Repetead styles stay here
export const centerContent = `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const CenterElement = `
  display: block;
  margin: 1rem auto;
`

export const SimpleShadow = `box-shadow: 0 0 .2rem rgba(0,0,0,.5)`

export const smoothTransition =  `transition: All ease-in-out .3s`

export const positionAbsoluteCenter = (t, l) => `
  position: fixed;
  top: ${t}%;
  left: ${l}%;
  transform: translate(-50%, -50%); 
`

export const PageContainer = `
  position: fixed;
  top: 100px;
  right: 24px;
  height: calc(100vh - 120px);
  color: #000; 
  width: 81.2vw; 
  ${smoothTransition}; 
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: 0 0 1rem ${primaryColor}}; 
  background: ${secondaryColor};

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    display: block;
    position: relative;
    left: 5rem;
    background: #f4f4f4;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${tertiaryColor};
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &.active {
    width: 95vw;
  }

  * {
    overflow: hidden;
  }

  /* Tablets */
  @media ${device.tablet} {  
    width: 100%;
  }
`

export const GridMobileLargeMediaQuery = `
  /* large phone */
  @media ${device.mobileL} {  
    grid-template-columns: 1fr;
    grid-template-rows: auto;
}` 

export const FormElements = `
  background: transparent;
  padding: .5rem 1rem;
  border: none;
  border-bottom: 2px solid ${darkGray};
  font-size: 1.3rem;
  outline: none;
  color: #fff;
  ${smoothTransition};
  margin-bottom: 1rem;
  width: 100%;

  &:focus {
    border-color: ${tertiaryColor}
  }
`