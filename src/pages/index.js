import React from "react"

import GlobalLayout from "../components/global-layout"

import SEO from "../components/seo"
import Splash from "../components/splash/splash"
const IndexPage = () => (
  <GlobalLayout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Splash />
  </GlobalLayout>
)

export default IndexPage
