// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/headings/page-heading"
import bandImage from "../images/temp-shot.jpg"

const Container = styled.div`
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

const Shows = () => (
  <Layout>
    <SEO
      title="Tour"
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
    <PageHeading>Upcoming Shows</PageHeading>
    <Container>
      <p>Currently booking gigs for the Phoenix metro area.</p>
      <p>
        If you want to get in touch please{" "}
        <a href="mailto:lonecontrolmusic@gmail.com">email us</a>.
      </p>
    </Container>
  </Layout>
)

export default Shows
