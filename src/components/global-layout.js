/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../styles"

const GlobalLayout = ({ children }) => {
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
      render={() => (
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            {children}
          </>
        </ThemeProvider>
      )}
    />
  )
}
GlobalLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalLayout
