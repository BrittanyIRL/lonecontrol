// import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HorizontalLine from "../components/accents/horizontal-line"
import PageHeading from "../components/headings/page-heading"

const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const SoundCloudAnchor = styled(OutboundLink)`
  background-color: ${({ theme }) => theme.colors.MUMMYS_TOMB};
  color: ${({ theme }) => theme.colors.PLATINUM};
  border-radius: 1px;
  padding: 1rem;
  font-size: 2rem;
  font-weight: 600;
  align-self: center;
  width: 25rem;
  margin-top: 3rem;
  text-align: center;
`

const StreamingContainer = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
`

const StreamingOption = styled(OutboundLink)`
  display: block;
  background-color: ${({ theme }) => theme.colors.MUMMYS_TOMB};
  max-width: 33%;
  width: 25rem;
  min-width: 5rem;
  height: 10rem;
  margin: 1rem;
  align-self: center;
  text-align: center;
  line-height: 10rem;
  color: ${({ theme }) => theme.colors.PLATINUM};
  font-size: 2rem;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`

const Listen = ({ data }) => {
  const {
    keywords,
    heading,
    promoFocus,
  } = data.file.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <SEO title="Listen" keywords={keywords} />
      <>
        <PageHeading>{heading}</PageHeading>
        <TrackContainer>
          <h3>{heading}</h3>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src={promoFocus[0].soundcloudIframeSource}
          />
          <SoundCloudAnchor href={promoFocus[0].soundcloudLink} target="_blank">
            {promoFocus[0].linkText}
          </SoundCloudAnchor>
        </TrackContainer>
        <HorizontalLine />
        <StreamingContainer>
          <StreamingOption
            href="https://desertdriprecords.bandcamp.com/album/lone-control"
            target="_blank"
          >
            BandCamp
          </StreamingOption>
          <StreamingOption
            disabled
            href="https://music.apple.com/us/artist/lone-control/1480134429"
            target="_blank"
          >
            Apple Music
          </StreamingOption>
          <StreamingOption
            disabled
            href="https://open.spotify.com/artist/1mQIWZIhNVI4nrAhxlXHOI"
            target="_blank"
          >
            Spotify
          </StreamingOption>
        </StreamingContainer>
      </>
    </Layout>
  )
}

export default Listen

export const query = graphql`
  {
    file(relativePath: { eq: "listen.md" }) {
      id
      childMarkdownRemark {
        frontmatter {
          keywords
          heading
          promoFocus {
            track
            soundcloudIframeSource
            soundcloudLink
            linkText
          }
        }
      }
    }
  }
`
