import * as React from 'react'
import styled from 'styled-components'

import * as palette from '../../palette'
import * as texts from '../../atoms/texts'

import * as style from './style'

export const Detail = styled(({ title, subtitle, label, children, ...props }) => (
  <div {...props}>
    <texts.Title>{title}</texts.Title>
    <texts.Subtitle>{subtitle}</texts.Subtitle>
    <texts.Label>{label}</texts.Label>
    <texts.Paragraph>{children}</texts.Paragraph>
  </div>
))`
  ${style.box}
`

export const Status = styled(({ children, ...props }) => (
  <div {...props}>
    <texts.Label>{children}</texts.Label>
  </div>
))`
  ${style.verticalCenter}
`
