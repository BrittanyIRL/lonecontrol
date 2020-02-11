// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/headings/page-heading"
import feb192020Poster from "../images/02-19-2020-disco.png"
import feb222020Poster from "../images/02-22-2020-monarch.png"
import march112020Poster from "../images/03-11-2020-cardiff.png"
import HorizontalLine from "../components/accents/horizontal-line"

const showList = [
  {
    date: new Date("02-19-2020"),
    imageUrl: feb192020Poster,
    imageAlt: "poster art for Feb 19 show at Disco Inferno",
    locationText: "Feb 19, 2020 @ Disco Inferno (Tempe, AZ)",
    secondaryInfo: "Tickets at Door",
  },
  {
    date: new Date("02-21-2020"),
    // imageUrl: jan032020Poster,
    imageAlt: "poster art for Feb 21 show at TBA",
    locationText: "Feb 21, 2020 @ TBA (Las Cruces, NM)",
    ticketsUrl: false,
    secondaryInfo: "Tickets at Door",
  },
  {
    date: new Date("02-22-2020"),
    imageUrl: feb222020Poster,
    imageAlt: "poster art for Feb 22 show at TBA",
    locationText: "Feb 22, 2020 @ Monarch (El Paso, TX)",
    ticketsUrl: false,
    secondaryInfo: "Free",
  },
  {
    date: new Date("03-11-2020"),
    imageUrl: march112020Poster,
    imageAlt: "poster art for March 11 show at TBA",
    locationText: " March 11, 2020 @ Cardiff Giant (Phoenix, AZ)",
    ticketsUrl: false,
    secondaryInfo: "Tickets at Door",
  },
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
  min-height: 30rem;
  background-color: black;
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
