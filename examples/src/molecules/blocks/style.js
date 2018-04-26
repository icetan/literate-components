import styled, { css } from 'styled-components'

import * as palette from '../../palette'

export const verticalCenter = css`
  height: 100%;
    display: flex;
    align-items: center; /* Vertical center alignment */
`

export const twoColumn = css`
  display: flex;
  
  .left {
    width: 70%;
  }

  .right {
    width: 30%;
    ${verticalCenter}
  }
`

export const box = css`
  padding: 1rem;
    box-shadow: 0px 0px 10px -4px rgba(1,1,1,0.2);
  background: ${palette.white};
`
