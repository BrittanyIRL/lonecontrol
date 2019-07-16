import React from "react"
import styled from "styled-components"

// TODO make this animated

const Line = styled.hr`
  width: 100%;
  color: ${({ theme }) => theme.colors.RAISIN_BLACK};
  margin-bottom: 3rem;
`

const HorizontalLine = () => <Line />

export default HorizontalLine
