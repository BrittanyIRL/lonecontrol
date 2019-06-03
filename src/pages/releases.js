// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import PageHeading from "../components/headings/page-heading"

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

const Releases = () => (
  <Layout>
    <SEO
      title="Releases"
      keywords={[
        `phoenix`,
        `punk`,
        `music`,
        `chris trian`,
        `gerrit feenstra`,
        `desert drip`,
        `new music`,
        `unnecessary voice`,
      ]}
    />
    {/* <PageHeading>Physical Releases</PageHeading> */}
    <ReleasesContainer>
      <h3>Lone Control s/t EP coming soon on Desert Drip Records.</h3>
      <AlbumImage
        src={epFrontImage}
        alt="Self-Titled Album Cover for Lone Control"
      />
      <p>
        Follow us on{" "}
        <a href="https://www.instagram.com/lonecontrol/">Instagram</a> to stay
        in the know.
      </p>
    </ReleasesContainer>
  </Layout>
)

export default Releases
