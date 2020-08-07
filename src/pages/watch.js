// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import format from "date-fns/format"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/headings/page-heading"

const VideoContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
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

const Video = ({ data }) => {
  const {
    heading,
    keywords,
    videos = [],
  } = data.file.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={heading} keywords={keywords} />
      <>
        <PageHeading>{heading}</PageHeading>
        {videos.map((video, index) => {
          return (
            <VideoContainer key={`video_${index}`}>
              <h3>{video.title}</h3>
              <p>{video.release}</p>
              <p>
                Released: {format(new Date(video.releaseDate), "MMMM yyyy")}
              </p>

              <iframe
                width="100%"
                scrolling="no"
                src={video.iframeSrc}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </VideoContainer>
          )
        })}
      </>
    </Layout>
  )
}

export default Video

export const query = graphql`
  {
    file(relativePath: { eq: "watch.md" }) {
      id
      childMarkdownRemark {
        frontmatter {
          heading
          keywords
          videos {
            title
            release
            releaseDate
            iframeSrc
          }
        }
      }
    }
  }
`
