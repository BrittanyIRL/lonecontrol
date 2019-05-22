import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const HeadingContainer = styled.div`
  padding-bottom: 2rem;
`

const PageHeadingImage = ({ children }) => (
  <HeadingContainer>{children}</HeadingContainer>
)

PageHeadingImage.propTypes = {
  children: PropTypes.node.isRequired,
}
export default PageHeadingImage
