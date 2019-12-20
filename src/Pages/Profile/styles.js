import styled from 'styled-components';

import { PageContainer } from '../../Styles/mixins'

export const Container = styled.div`
  ${PageContainer};
  overflow-y: scroll;

  .me {
    display: grid;
    grid-template-columns: 20% auto;
  }
`;
