// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MainContent = styled.div``

const MainHeading = styled.h2``

const Song = styled.div`
  margin-bottom: 2rem;
`
const LyricSection = styled.p`
  line-height: 1.2;
  margin-bottom: 1.5rem;
`
const LyricLine = styled.span`
  display: block;
`
const Lyrics = () => (
  <Layout>
    <SEO title="Lyrics" />
    <MainContent>
      <MainHeading>Lyrics</MainHeading>
      <Song>
        <h2>Unnecessary Voice</h2>
        <LyricSection>
          <LyricLine>I am not a necessary voice</LyricLine>
          <LyricLine>The future is not my choice</LyricLine>
          <LyricLine>Proverbially one of the boys</LyricLine>
          <LyricLine>I am only adding to the noise</LyricLine>
        </LyricSection>

        <LyricSection>
          <LyricLine>I am the status quo</LyricLine>
          <LyricLine>I denominate the ratio</LyricLine>
          <LyricLine>Not a martyr or a cherry bomb</LyricLine>
          <LyricLine>I am the echo of a fading song</LyricLine>
        </LyricSection>

        <LyricSection>
          <LyricLine>Listen to my silence</LyricLine>
        </LyricSection>
      </Song>
      <Song>
        <h2>My Life is My Fault</h2>
        <LyricSection>
          <LyricLine>Don't call it a sickness</LyricLine>
          <LyricLine>Don't call it the blues</LyricLine>
          <LyricLine>I'm nobody's victim</LyricLine>
          <LyricLine>And if I was, what would it be to you?</LyricLine>
          <LyricLine>My earthly offering</LyricLine>
          <LyricLine>Devoid of salt</LyricLine>
          <LyricLine>A youth spent squandering</LyricLine>
          <LyricLine>And I know full well my life is my fault</LyricLine>
        </LyricSection>

        <LyricSection>
          <LyricLine>My life is my fault</LyricLine>
        </LyricSection>
        <LyricSection>
          <LyricLine>Self deprecation</LyricLine>
          <LyricLine>Poison to the soul</LyricLine>
          <LyricLine>But one ounce of clarity</LyricLine>
          <LyricLine>Can return a hundred fold</LyricLine>
          <LyricLine>I don’t need your pretense</LyricLine>
          <LyricLine>Pity or resolve</LyricLine>
          <LyricLine>I just need to know full well</LyricLine>
          <LyricLine>When anything goes my life is my fault</LyricLine>
        </LyricSection>
        <LyricSection>
          <LyricLine>My life is my fault</LyricLine>
        </LyricSection>
      </Song>
    </MainContent>
  </Layout>
)

// SoundCloud.propTypes = {
//   siteTitle: PropTypes.string,
// }

// SoundCloud.defaultProps = {
//   siteTitle: ``,
// }

export default Lyrics
