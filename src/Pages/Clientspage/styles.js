import styled from 'styled-components';

import { PageContainer, FormStyles } from '../../Styles/mixins'
import { secondaryColor } from '../../Styles/variables'

export const Container = styled.div`
  ${PageContainer};
  display: grid;
  grid-template-rows: 7% auto;

  main {
    width: 100%; 
    height: 100%;
    background: #fff;
    position: relative;

    form {
      ${FormStyles};
      overflow: scroll;
      height: 770px; 

      textarea {
        color: ${secondaryColor};
        height: 50px !important;
      }
    }
  }
`;
