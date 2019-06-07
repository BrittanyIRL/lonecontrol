import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"

import SEO from "../components/seo"

import epFrontImageColor from "../images/lc_house_color.jpg"

const HomeContainer = styled.div`
  width: 100%;
  padding: auto 2rem;
`

const HomeImage = styled.div`;
  max-width: 600px;
  height: 400px;
  max-height: 500px;
  background-image: url(${epFrontImageColor});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  filter: grayscale(100%);
  transition: all 0.25s ease;
  margin: 1rem 0;

  &:hover {
    filter: grayscale(0);
    transition
  }

  @media (max-width: 600px) {
    margin: .5rem 0;
    max-height: 50vh;
    height: 40vh;
  }

  @media (max-width: 450px) {
      max-height: 40vh;
      height: 30vh;
  }

`

const IntroText = styled.p`
  width: 100%;
  max-width: 600px;
  text-align: center;
  font-weight: ${({ sub }) => (sub ? "500" : "600")};
  font-size: ${({ sub }) => (sub ? "2rem" : "3rem")};
  font-family: ${({ theme, sub }) =>
    sub ? "default" : theme.font.family.bold};

  @media (max-width: 600px) {
    font-size: ${({ sub }) => (sub ? "1.25rem" : "2.25rem")};
  }
  @media (max-width: 400px) {
    max-width: 325px;
    font-size: ${({ sub }) => (sub ? "1rem" : "1.75rem")};
  }
`

const HomeLink = styled(OutboundLink)`
  font-size: 3rem;
  border-bottom: 0.15rem solid ${({ theme }) => theme.colors.RAISIN_BLACK};
  color: ${({ theme }) => theme.colors.RAISIN_BLACK};
  &:hover {
    font-style: italic;
  }

  @media (max-width: 600px) {
    font-size: ${({ sub }) => (sub ? "1.25rem" : "2.25rem")};
  }
  @media (max-width: 400px) {
    font-size: ${({ sub }) => (sub ? "1rem" : "2rem")};
  }
`
const Home = () => (
  <Layout>
    <SEO
      title="Home"
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
    <HomeContainer>
      <IntroText>
        Lone Control debut single <br /> "Unnecessary Voice"{" "}
        <HomeLink
          href="https://soundcloud.com/lonecontrol/unnecessary-voice"
          target="_blank"
        >
          out now
        </HomeLink>
        .
      </IntroText>
      <HomeImage />
      <IntroText sub>
        Lone Control s/t EP coming soon on Desert Drip Records.
      </IntroText>
    </HomeContainer>
  </Layout>
)

export default Home
