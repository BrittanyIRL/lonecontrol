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
        {songs.map((song, index) => {
          return (
            <Song key={`song_${index}`}>
              <SongTitle>{song.title}</SongTitle>
              <div dangerouslySetInnerHTML={{ __html: song.lyricText }} />
            </Song>
          )
        })}
      </SongsContainer>
    </Layout>
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
