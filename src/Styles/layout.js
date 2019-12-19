import styled from 'styled-components'

import { GridMobileLargeMediaQuery } from './mixins'
import { device } from './device'

export const GridColumn2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  ${GridMobileLargeMediaQuery};

  @media ${device.tablet} {   
    grid-gap: 5px; 
  }
`

export const GridColumn3 =  styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: .5em;
  padding-top: 3rem;
  ${GridMobileLargeMediaQuery};

  @media ${device.tablet} {   
    grid-gap: 0; 
  }
`

export const GridColumn4 =  styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1em;
  padding-top: 3rem;
  ${GridMobileLargeMediaQuery};
`

export const Grid2Column4 =  styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2em;
  ${GridMobileLargeMediaQuery};
`