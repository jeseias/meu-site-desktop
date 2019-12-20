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
    background: #333;

    .img {
      overflow: hidden;
      border-radius: 100%;
      ${centerContent};
      border: 1px solid #fff;
      position: relative;

      .upload {
        display: block;
        position: absolute;
        width: 100%;
        height: 40%;
        bottom: -100%;
        background: rgba(0,0,0, .3);
        ${centerContent};
        ${smoothTransition};

        * {
          cursor: pointer;
        }

        &:hover {
          background: rgba(0,0,0, .5); 
        }

        input {
          width: 100%;
          height: 100%; 
          position: absolute;
          opacity: 0;
        }
      }

      &:hover  {
        
        .upload {
          bottom: 0;
        }

      }

    } 

  }

`;
