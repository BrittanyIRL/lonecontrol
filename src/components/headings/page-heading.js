import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Heading = styled.h2`
  font-size: 3.5rem;
  font-family: ${({ theme }) => theme.font.family.bold};
  padding-bottom: 2rem;
  color: ${({ theme }) => theme.colors.RAISIN_BLACK};
`

const PageHeading = ({ children }) => <Heading>{children}</Heading>

PageHeading.propTypes = {
  children: PropTypes.node.isRequired,
}
export default PageHeading
