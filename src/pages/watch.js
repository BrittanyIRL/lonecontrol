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
    <SEO
      title="Watch"
      keywords={[
        `phoenix`,
        `punk`,
        `music`,
        `chris`,
        `gerrit`,
        `desert drip`,
        `new music`,
        `unnecessary voice`,
        `lone control`,
        `loan control`,
        `arizona`,
        `rock`,
        `indie`,
        `band`,
      ]}
    />
    <>
      <PageHeading>Watch</PageHeading>

      <VideoContainer>
        <h3>What You Deserve</h3>
        <p>Album: Self Titled EP</p>
        <p>Released: November 2019</p>
        <iframe
          width="100%"
          scrolling="no"
          frameborder="no"
          src="https://www.youtube.com/embed/G25Y5sj6cyI"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoContainer>
    </>
  </Layout>
)

export default Video
