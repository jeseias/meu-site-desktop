import styled from 'styled-components';

import { centerContent, smoothTransition } from '../../Styles/mixins'

export const Container = styled.div`
  overflow: hidden;
      border-radius: 100%;
      ${centerContent};
      border: 1px dashed #f4f4f4;
      position: relative;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      &.hasThumbnail {
        border: none; 
      }

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
          color: #fff;
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
`;
