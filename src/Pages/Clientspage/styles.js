import styled from 'styled-components';

import { PageContainer } from '../../Styles/mixins'

export const Container = styled.div`
  ${PageContainer};
  display: grid;
  grid-template-rows: 7% auto;

  main {
    width: 100%;
    height: 100%;
    background: #fff;
    position: relative;
  }
`;
