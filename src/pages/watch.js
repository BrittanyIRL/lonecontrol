// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/headings/page-heading"

const VideoContainer = styled.div`
  width: 100%;
  & > iframe {
    padding-top: 2rem;

    height: auto;
    min-height: 55rem;
  }

  @media (max-width: 600px) {
    & > iframe {
      max-height: 25rem;
    }
  }
`

const Video = () => (
  <Layout>
    <SEO title="Watch" />
    <>
      <PageHeading>Watch</PageHeading>

      <VideoContainer>
        <h3>Video #1</h3>
        <p>Description</p>
        <p>Month, Year</p>
        <p>Credits</p>
        <iframe
          src="https://www.youtube.com/embed/kzVnd3AHx1I"
          width="100%"
          scrolling="no"
          frameborder="no"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </VideoContainer>
    </>
  </Layout>
)

export default Video
