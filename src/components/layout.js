/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
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
  height: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-areas:
      "navigation"
      "main"
      "footer";
  }
`

const StyledNavigation = styled(Navigation)`
  grid-area: navigation;
  height: 100vh;
`
const Main = styled.main`
  grid-area: main;
  min-height: 90vh;
`
const Footer = styled.footer`
  grid-area: footer;
  font-size: 0.8rem;
  text-align: left;
  padding: 0 0 1rem 3rem;
  bottom: 0;
  position: absolute;
`

const today = new Date()
const Layout = ({ children }) => (
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
          <Body>
            <StyledNavigation />
            <Main>{children}</Main>

            <Footer>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
