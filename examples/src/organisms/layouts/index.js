import * as React from 'react'
import styled from 'styled-components'

import * as style from './style'

export const TwoColumn = styled(({ children, ...props }) => (
  <div {...props}>
    <div className="left">{children[0]}</div>
    <div className="right">{children[1]}</div>
  </div>
))`${style.twoColumn}`
