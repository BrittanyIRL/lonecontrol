// import PropTypes from "prop-types"
import React from "react"
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

const Listen = () => (
  <Layout>
    <SEO
      title="Listen"
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
      <PageHeading>Listen</PageHeading>
      <TrackContainer>
        <h3>Unnecessary Voice</h3>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/627538080&color=%23495253&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
        <SoundCloudAnchor
          href="https://soundcloud.com/lonecontrol"
          target="_blank"
        >
          More on SoundCloud
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
          // href="https://itunes.apple.com/us/artist/lonecontrol"
          // target="_blank"
        >
          Coming Soon {/* Apple Music */}
        </StreamingOption>
        <StreamingOption
          disabled
          // href="https://spotify.com/lonecontroltemproute"
          // target="_blank"
        >
          Coming Soon {/* Spotify */}
        </StreamingOption>
      </StreamingContainer>
    </>
  </Layout>
)

export default Listen
