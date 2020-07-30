// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/headings/page-heading"

const SongsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Song = styled.div`
  max-width: 50%;
  min-width: 300px;
  margin-bottom: 2rem;
  p {
    margin-bottom: 1.5rem;

    span {
      display: block;
    }
  }
`
const SongTitle = styled.h3``

const Lyrics = ({ data }) => {
  const { heading, keywords, songs } = data.file.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={heading} keywords={keywords} />

      <PageHeading>{heading}</PageHeading>
      <SongsContainer>
        {SongsContainer.map((song, index) => {
          ;<Song key={`song_${index}`}>
            <SongTitle>{song.title}</SongTitle>/SongTitle>
            <div dangerouslySetInnerHTML={{ __html: song.lyricText }} />
          </Song>
        })}
      </SongsContainer>
    </Layout>
    // <Song>
    //   <SongTitle>Unnecessary Voice</SongTitle>
    //   <p>
    //     <span>I am not a necessary voice</span>
    //     <span>The future is not my choice</span>
    //     <span>Proverbially one of the boys</span>
    //     <span>I am only adding to the noise</span>
    //   </p>

    //   <p>
    //     <span>I am the status quo</span>
    //     <span>I denominate the ratio</span>
    //     <span>Not a martyr or a cherry bomb</span>
    //     <span>I am the echo of a fading song</span>
    //   </p>

    //   <p>
    //     <span>Listen to my silence</span>
    //   </p>
    // </Song>
    /* <Song>
        <SongTitle>My Life is My Fault</SongTitle>
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
      </Song> */
  )
}

export default Lyrics

export const query = graphql`
  {
    file(relativePath: { eq: "lyrics.md" }) {
      id
      childMarkdownRemark {
        frontmatter {
          keywords
          heading
          songs {
            title
            lyricText
          }
        }
      }
    }
  }
`
