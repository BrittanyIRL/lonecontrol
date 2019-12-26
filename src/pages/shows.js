// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/headings/page-heading"
import jan032020Poster from "../images/01-03-2020-quaillounge.png"
import jan242020Poster from "../images/01-24-2020-trunkspace.jpg"
import HorizontalLine from "../components/accents/horizontal-line"

const showList = [
  {
    date: new Date("01-24-2020"),
    imageUrl: jan242020Poster,
    imageAlt: "poster art for Jan 24 show at Trunk Space",
    locationText: "Jan 24, 2020 @ Trunk Space",
    ticketsUrl:
      "https://www.eventbrite.com/e/dude-york-tickets-81798863603?fbclid=IwAR1k9AleVL3IOXqNzhQXSLfovkdBhWyzIDYNY6YEJkp2DvBhNMjD23g3nkU",
    ticketsText: "Tickets",
    secondaryInfo: "W/ Dude York & MRCH",
  },
  {
    date: new Date("01-03-2020"),
    imageUrl: jan032020Poster,
    imageAlt: "poster art for Jan 03 show at Quail Lounge",
    locationText: "Jan 03, 2020 @ Quail Lounge",
    ticketsUrl: false,
    secondaryInfo: "Free! Opening for Anchor Baby w/ JJCnV",
  },

  // {
  //   date: new Date("11-10-2019"),
  //   imageUrl: nov10Poster,
  //   imageAlt: "poster art for Nov 10 show",
  //   locationText: "Nov 10, 2019 @ Trunk Space",
  //   ticketsUrl:
  //     "https://www.eventbrite.com/e/le-wolves-tickets-75775668063?fbclid=IwAR272pJt0_0GdLvOHNZ0QLeTn0EoQfPxbQby6vjq1TjJDz9sqiHDGNwZ4ds",
  //   ticketsText: "Tickets",
  //   secondaryInfo: "With Le Wolves, Soul, and Ring Finger No Pinky",
  // },

  // {
  //   date: new Date("9-5-2019"),
  //   imageUrl: sept5Poster,
  //   imageAlt: "poster art for Sept 5 show",
  //   locationText: "Sept 5, 2019 @ Trunk Space",
  //   ticketsUrl: "https://www.eventbrite.com/e/cross-record-tickets-65004859284",
  //   ticketsText: "Tickets Here",
  //   secondaryInfo: "With Cross Record, Dovi and Justin Moody",
  // },
  // {
  //   date: new Date("8-26-2019"),
  //   imageUrl: aug26Poster,
  //   imageAlt: "poster art for Aug 26 show with Twompsax and Lenguas Largas",
  //   locationText: "Aug 26, 2019 @ Sky Bar, Tuscon AZ",
  //   ticketsUrl: false,
  //   secondaryInfo: "Free! Playing with Twompsax and Lenguas Largas",
  // },
]

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
const Shows = () => {
  // TODO import date-fns to do better filtering to include today's date in returned results
  // TODO sort
  const upcomingShowList = showList
    .filter(show => show.date >= new Date())
    .sort((showA, showB) => showA.date < showB.date)

  return (
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
          {upcomingShowList.map(show => {
            return (
              <Show>
                <ShowPosterContainer>
                  <Image src={show.imageUrl} alt={show.imageAlt} />
                </ShowPosterContainer>
                <ShowDetailsContainer>
                  <Location>{show.locationText}</Location>
                  {show.ticketsUrl && (
                    <SecondaryInfo>
                      <OutboundLink href={show.ticketsUrl} target="_blank">
                        {show.ticketsText}
                      </OutboundLink>
                    </SecondaryInfo>
                  )}
                  <SecondaryInfo>{show.secondaryInfo}</SecondaryInfo>
                </ShowDetailsContainer>
              </Show>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}

export default Shows
