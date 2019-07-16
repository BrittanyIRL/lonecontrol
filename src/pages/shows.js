// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/headings/page-heading"
import july20Poster from "../images/7-20-2019-houseshow.jpg"
import sept5Poster from "../images/9-5-2019-trunkspace.jpg"
import HorizontalLine from "../components/accents/horizontal-line"

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

const Show = styled.li`
  margin-bottom: 2rem;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`
const Location = styled.span`
  font-weight: 600;
`

const SecondaryInfo = styled.span`
  display: block;
  text-style: italics;
`

const ShowPosterContainer = styled.div``
const ShowDetailsContainer = styled.div`
  padding-left: 2rem;
  @media (max-width: 600px) {
    padding-left: 0;
    margin-bottom: 2rem;
  }
`
const Image = styled.img`
  height: 30rem;
  object-fit: contain;
  object-position: top;
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
      <HorizontalLine />
      <ul>
        <Show>
          <ShowPosterContainer>
            <Image src={july20Poster} alt="poster art for July 20th show" />
          </ShowPosterContainer>
          <ShowDetailsContainer>
            <Location>July 20, 2019</Location>{" "}
            <SecondaryInfo>
              <OutboundLink
                href="https://www.instagram.com/lonecontrol/"
                target="_blank"
              >
                DM on Instagram for Location and Tickets
              </OutboundLink>
            </SecondaryInfo>
            <SecondaryInfo>
              With Soft Sweater, Miss Moody, and Soft Ronnie
            </SecondaryInfo>
          </ShowDetailsContainer>
        </Show>
        <Show>
          <ShowPosterContainer>
            <Image src={sept5Poster} alt="poster art for Sept 5 show" />
          </ShowPosterContainer>
          <ShowDetailsContainer>
            <Location>Sept 5, 2019 @ The Trunk Space</Location>
            <SecondaryInfo>
              <OutboundLink
                href="https://www.eventbrite.com/e/cross-record-tickets-65004859284"
                target="_blank"
              >
                Tickets Here
              </OutboundLink>
            </SecondaryInfo>
            <SecondaryInfo>
              With Cross Record, Dovi and Justin Moody
            </SecondaryInfo>
          </ShowDetailsContainer>
        </Show>
        {/* <Show>
          <Location>Oct 9, 2019 @ Lunchbox</Location>{" "}
          <SecondaryInfo>
            <OutboundLink href="#" target="_blank">
              Tickets Here
            </OutboundLink>
          </SecondaryInfo>
          <SecondaryInfo>In support of Gardens &amp; Villa</SecondaryInfo>
        </Show>
        <Show>
          <Location>Oct 12, 2019 @ Valley Bar</Location>{" "}
          <SecondaryInfo>
            <OutboundLink href="#" target="_blank">
              Tickets Here
            </OutboundLink>
          </SecondaryInfo>
          <SecondaryInfo>Album Release Party</SecondaryInfo>
        </Show> */}
      </ul>
    </Container>
  </Layout>
)

export default Shows
