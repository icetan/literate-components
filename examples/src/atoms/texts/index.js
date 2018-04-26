import React from 'react'
import styled from 'styled-components'

import * as palette from '../../palette'
import roboto from '../../fonts/roboto'

export const MainHeading = styled.h1`
  ${roboto}
`

export const Title = styled.h4`
  ${roboto}
  font-size: 1.2rem;
  overflow: hidden;
  margin: 0.5em 0;
  color: ${palette.grey};
`

export const Subtitle = styled.h5`
  ${roboto}
  font-size: 1rem;
  margin: 0.5em 0;
  color: ${palette.blue};
`

export const Label = styled.span`
  ${roboto}
  font-size: 1rem;
  color: ${palette.lightgrey};
`

export const Paragraph = styled.p`
  ${roboto}
  font-size: 1rem;
`
