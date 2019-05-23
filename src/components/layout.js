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

const Body = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-areas:
    "navigation main"
    "footer footer";
  height: 100vh;
  margin-top: 2rem;
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
  height: calc(100vh - 6.1rem);
  overflow-y: scroll;
  padding: 0 3rem 0 3rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 6.1rem;
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
