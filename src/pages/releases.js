// import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/headings/page-heading"

import epFrontImage from "../images/lc_ep_front.jpg"
const ReleasesContainer = styled.div`
  width: 60rem;
  max-width: 60vw;
  margin-bottom: 2rem;
  p {
    margin-bottom: 0.8rem;
  }
  a {
    border-bottom: 0.05rem solid ${({ theme }) => theme.colors.RAISIN_BLACK};
    color: ${({ theme }) => theme.colors.RAISIN_BLACK};
    &:hover {
      font-style: italic;
    }
  }
`
const AlbumImage = styled.img`
  width: 40rem;
`

const Releases = ({ data }) => {
  const {
    keywords,
    heading,
    releases,
  } = data.file.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <SEO title="Releases" keywords={keywords} />
      <PageHeading>{heading}</PageHeading>

      {releases.map((release) => (
        <ReleasesContainer>
          <h3 dangerouslySetInnerHTML={{ __html: release.title }} />
          <AlbumImage src={release.art} alt={release.artAlt} />
          <p dangerouslySetInnerHTML={{ __html: release.releaseText }} />
          <p dangerouslySetInnerHTML={{ __html: release.listenText }} />
        </ReleasesContainer>
      ))}
    </Layout>
  )
}

export default Releases

export const query = graphql`
  {
    file(relativePath: { eq: "releases.md" }) {
      id
      childMarkdownRemark {
        frontmatter {
          keywords
          heading
          releases {
            title
            art
            artAlt
            releaseText
            listenText
          }
        }
      }
    }
  }
`
