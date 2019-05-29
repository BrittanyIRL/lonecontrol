// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HorizontalLine from "../components/accents/horizontal-line"
import PageHeading from "../components/headings/page-heading"

const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const SoundCloudAnchor = styled.a`
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

const StreamingOption = styled.a`
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
`

const SoundCloud = () => (
  <Layout>
    <SEO title="Listen" />
    <>
      <PageHeading>Listen</PageHeading>
      <TrackContainer>
        <h3>Unnecessary Voice</h3>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/590551725&color=%23495253&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
        <br />
        <h3>Imaginary Fiend</h3>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/590551725&color=%23495253&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
        <SoundCloudAnchor href="https://soundcloud.com">
          More on SoundCloud
        </SoundCloudAnchor>
      </TrackContainer>
      <HorizontalLine />
      <StreamingContainer>
        <StreamingOption>BandCamp</StreamingOption>
        <StreamingOption>Apple Music</StreamingOption>
        <StreamingOption>Spotify</StreamingOption>
      </StreamingContainer>
    </>
  </Layout>
)

// SoundCloud.propTypes = {
//   siteTitle: PropTypes.string,
// }

// SoundCloud.defaultProps = {
//   siteTitle: ``,
// }

export default SoundCloud
