/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"

import GlobalLayout from "./global-layout"

import Navigation from "./navigation"

const Body = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-areas:
    "navigation main"
    "footer footer";
  height: 100vh;
  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-areas:
      "navigation"
      "main"
      "footer";
    overflow: ${({ hideWhileNavExposed }) =>
      hideWhileNavExposed ? "hidden" : "scroll"};
    height: 100vh;
  }
`

const StyledNavigation = styled(Navigation)`
  grid-area: navigation;
  height: 100vh;
`
const Main = styled.main`
  margin: 0;
  grid-area: main;
  height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  padding: 2rem 3rem 0 3rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 600px) {
    padding: 0 3rem;
    margin-top: 0;
    display: ${({ hideWhileNavExposed }) =>
      hideWhileNavExposed ? "none" : "block"};
  }
`
const Footer = styled.footer`
  grid-area: footer;
  text-align: left;
  position: absolute;
  height: 5rem;
  width: 100%;
  position: fixed;
  bottom: 1rem;
  left: 3rem;
  & > p {
    font-size: 0.8rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
`

// margin-top: 3rem;
// display: ${({ hideWhileNavExposed }) =>
//   hideWhileNavExposed ? "none" : "block"};

const today = new Date()
const Layout = ({ children }) => {
  const [showNav, toggleShowNav] = useState(false)

  return (
    <GlobalLayout>
      <Body hideWhileNavExposed={showNav}>
        <StyledNavigation showNav={showNav} onClickToggleNav={toggleShowNav} />
        <Main hideWhileNavExposed={showNav}>{children}</Main>

        <Footer hideWhileNavExposed={showNav}>
          <p>
            copyright and content belong to Lone Control, {today.getFullYear()}.
          </p>
          <p>site maintained from the surface of Mars.</p>
        </Footer>
      </Body>
    </GlobalLayout>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
