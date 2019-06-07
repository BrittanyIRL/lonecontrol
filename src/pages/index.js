import React from "react"

import styled from "styled-components"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import GlobalLayout from "../components/global-layout"
import SEO from "../components/seo"
import SplashBackground from "../images/lc_house_bw.jpg"
import LoneControlText from "../images/lc_ep_text.png"

const SplashContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  position: absolute;
  background-image: url(${SplashBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const SplashText = styled(OutboundLink)`
  background-image: url(${LoneControlText});
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-width: 30vw;
  max-width: 600px;
  max-height: 200px;
  z-index: 100;
  margin: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  &:hover {
    opacity: 0.7;
  }
`

const EnterSite = styled(Link)`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  text-align: center;
  font-size: 4rem;
  font-weight: 600;
  animation-name: colorPulse;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  color: ${({ theme }) => theme.colors.RAISIN_BLACK};

  @keyframes colorPulse {
    0% {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.RAISIN_BLACK};
    }
    50% {
      font-weight: 700;

      color: ${({ theme }) => theme.colors.FELDGRAU};
    }
    100% {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.RAISIN_BLACK};
    }
  }

  @media (max-width: 600px) {
    font-size: 3rem;
    height: 5rem;
  }
`

const IndexPage = () => (
  <GlobalLayout>
    <SEO
      title="Lone Control"
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
    <body>
      <SplashContainer>
        <SplashText
          alt="Visit Bandcamp to hear the debut EP"
          href="https://desertdriprecords.bandcamp.com/album/lone-control"
          aria-description="Lone Control"
          target="_blank"
        />
        <EnterSite to="/home/">Enter Site</EnterSite>
      </SplashContainer>
    </body>
  </GlobalLayout>
)

export default IndexPage
