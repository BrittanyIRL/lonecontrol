import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeadingImage from "../components/headings/page-heading-image"

import epFrontImage from "../images/ep-front.jpg"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeadingImage>
      <img
        src={epFrontImage}
        alt="lone control ep 1 cover image by Chris Trian"
      />
    </PageHeadingImage>
  </Layout>
)

export default IndexPage
