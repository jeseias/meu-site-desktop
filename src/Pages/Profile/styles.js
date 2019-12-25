import styled from 'styled-components';

import { PageContainer, centerContent, smoothTransition } from '../../Styles/mixins' 

export const Container = styled.div`
  ${PageContainer};
  overflow-y: scroll;

  .me {
    display: grid;
    grid-template-columns: 20% auto; 
    grid-template-rows: 280px;
    grid-gap: 1rem;
    background: #333; ir 

    .details {
      input {
        height: auto;
        margin: .1rem;
        padding: .2rem .3rem;
      }

      textarea {
        height: auto;
        margin: .1rem;   
        padding: .2rem .3rem;
        min-height: 111px;
        max-height: 111px; 
      }
    }

  }

`;
