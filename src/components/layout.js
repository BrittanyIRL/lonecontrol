/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components/macro"
import { GlobalStyle, theme } from "../styles"

import Navigation from "./navigation"

const Body = styled.body`
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
  grid-area: main;
  min-height: 90vh;
  padding: 0 2rem 0 3rem;

  @media (max-width: 600px) {
    padding: 0 3rem;
    display: ${({ hideWhileNavExposed }) =>
      hideWhileNavExposed ? "none" : "block"};
  }
`
const Footer = styled.footer`
  grid-area: footer;
  font-size: 0.8rem;
  text-align: left;
  padding: 0 0 1rem 3rem;
  bottom: 0;
  position: absolute;
  max-height: 6rem;
  @media (max-width: 600px) {
    display: ${({ hideWhileNavExposed }) =>
      hideWhileNavExposed ? "none" : "block"};
  }
`

const today = new Date()
const Layout = ({ children }) => {
  const [showNav, toggleShowNav] = useState(false)
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Body hideWhileNavExposed={showNav}>
              <StyledNavigation
                showNav={showNav}
                onClickToggleNav={toggleShowNav}
              />
              <Main hideWhileNavExposed={showNav}>{children}</Main>

              <Footer hideWhileNavExposed={showNav}>
                <p>
                  copyright and content belong to Lone Control,{" "}
                  {today.getFullYear()}.
                </p>
                <p>site maintained from the surface of Mars.</p>
              </Footer>
            </Body>
          </>
        </ThemeProvider>
      )}
    />
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
