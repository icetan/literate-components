import styled, { css } from 'styled-components'

import * as palette from '../../palette'

export const base = css`
  position: relative;
  padding: 10px 20px;
  border: 0;
  border-radius: 2px;
  letter-spacing: 0.1rem;
  font-size: 1.2rem;
  color: ${palette.white};
  background-color: ${palette.lightgrey};

  &:focus {
    outline: none;
  }

  &[disabled] {
    color: ${palette.white};
    opacity: 0.7;
    background-color: ${palette.lightgrey};
  }

  &:hover:not([disabled]) {
    opacity: 0.7;
    transition: opacity 0.3s ease-in;
  }
`

export const primary = css`
  ${base}
  background-color: ${palette.primary};
`

export const remove = css`
  ${base}
  background-color: ${palette.red};
`
