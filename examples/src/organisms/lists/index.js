import * as React from 'react'
import styled from 'styled-components'

import * as style from './style'

const List = ({ children, ...props }) => (
  <ul {...props}>
    {React.Children.map(children, el => <li>{el}</li>)}
  </ul>
)

export const Unordered = styled(List)`
  ${style.base}
`
