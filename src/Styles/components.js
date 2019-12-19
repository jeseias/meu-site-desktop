import styled from 'styled-components'

import { device } from './device'

import { primaryColor, tertiaryColor, backgrounColor, lightGray } from './variables'
import { smoothTransition, centerContent, FormElements } from './mixins'

export const ContentBox = styled.div`
  background: ${primaryColor};
  border-radius: 2rem;
  padding: 2rem;
  position: relative;
  ${smoothTransition};

  &:hover {
    transform: translateY(-5px);
  }
`

export const Tags = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between; 

  .icon{
    width: 30%;
    
    * {
      display: inline-block;
      padding: 1rem;
      border: 1px solid ${tertiaryColor};
      border-radius: 100%;
    } 
  }

  .details{
    width: 70%;
    text-align: left;

    span {
      color: ${tertiaryColor};
    }
  }

  @media ${device.laptop} {  
    ${centerContent};

    .icon, .details {
      width: auto;
      text-align: center;
    }

  }

  @media ${device.mobileL} { 
    display: flex;
    justify-content: flex-start;
    flex-direction: row; 
    text-align: center;

    .icon {
      margin-right: 1rem;
    }

    .details {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      span {
        text-align: left;
      }
    } 
  }
`

export const AwesomeBTN = styled.button`
  background: none;
  color: ${tertiaryColor}; 
  border: none;
  border-left: .2rem solid none;
  border-bottom: .2rem solid ${tertiaryColor};
  padding: .3rem 1rem;
  ${smoothTransition};

  &:hover {
    border-left: .3rem solid ${tertiaryColor};
    border-bottom: .3rem solid transparent;
    cursor: pointer;
    background: ${backgrounColor};
  }

  @media ${device.mobileL} { 
    height: 40px;
    margin-top: 1rem;
  }
`

export const Servicebox = styled.div`
  ${centerContent};
  color: #fff;
  text-align: center; 
`

export const Slider = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media ${device.mobileL} {  
    grid-template-columns: 1fr; 
  }
`

export const TestimonialBox = styled.div`
  header{
    display: grid;
    grid-template-columns: 50px auto 20%;
    grid-template-rows: auto auto;
    grid-gap: .3rem;

    .img { 
      padding: .3rem;
      border-radius: 100%;
    }

    .info {
      color: #fff;

      p {
        color: ${lightGray}
      }
    }

    .progressbar {
      ${centerContent};

      progress[value] {
        background-color: ${tertiaryColor};
        border-radius: 2px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
      }
    }

     
  }
  main {
    color: #fff;
  }
`

export const MainCenteredContent = styled.div`
  margin: ${props => props.marginTop} auto;
  width: ${props => props.width};

  @media ${device.laptop} {  
    width: 99%;
  }
`

export const InfoBox = styled.div`
  position: relative;
  width: 100%;
  display: block;

  *:not(before) {
    padding-left: 2rem;
  }
  
  h2 {
    color: #fff;
    margin-bottom: .4rem;
  }

  span {
    color: ${tertiaryColor};
    display: block;
    margin-bottom: 1rem;  
    ${centerContent}  
    justify-content: flex-start;
    flex-direction: row;

    svg {
      padding: 0;
    }
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2%;
    height: 100%;
    border: 3px solid ${tertiaryColor};
    margin-right: 2rem;
    ${smoothTransition};
    border-radius: 2rem;
  } 

  &:hover {
    &::before {
    background: ${tertiaryColor}
  }
  }
`

export const FormInput = styled.input`
  ${FormElements};
`

export const FormArea = styled.textarea`
  ${FormElements};
  min-height: 200px;
  margin-top: 2rem;
`