// import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import PropTypes from "prop-types"
import format from "date-fns/format"
import isAfter from "date-fns/isAfter"
import endOfYesterday from "date-fns/endOfYesterday"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/headings/page-heading"
import HorizontalLine from "../components/accents/horizontal-line"

const SEO_KEYWORDS_ARRAY = [
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

export const ShowsWrapper = ({ data }) => {
  const { title = "Shows", main, contact, upcomingShows } = data

  const upcomingShowList = data.upcomingShows
    .filter((show) => isAfter(new Date(show.date), endOfYesterday()))
    .sort((showA, showB) => showA.date < showB.date)

  return (
    <Layout>
      <SEO title="Tour" keywords={SEO_KEYWORDS_ARRAY} />
      <PageHeading>{title}</PageHeading>
      <Container>
        <p>{main}</p>
        <p>{contact}</p>
        <HorizontalLine />
        <ul>
          {upcomingShowList.map((show, id) => {
            return (
              <Show key={id}>
                {show.showPoster && (
                  <ShowPosterContainer>
                    <Image src={show.showPoster} alt={show.posterAlt} />
                  </ShowPosterContainer>
                )}
                <ShowDetailsContainer>
                  <Location>
                    {format(new Date(show.date), "M/d/yyyy")} at {show.venue} in{" "}
                    {show.location}
                  </Location>
                  {!show.ticketsAtDoor ? (
                    show.ticketsUrl && (
                      <SecondaryInfo>
                        <OutboundLink href={show.ticketsUrl} target="_blank">
                          {show.ticketsText}
                        </OutboundLink>
                      </SecondaryInfo>
                    )
                  ) : (
                    <SecondaryInfo>Tickets at Door</SecondaryInfo>
                  )}
                  {show.secondaryInfo && (
                    <SecondaryInfo>{show.secondaryInfo}</SecondaryInfo>
                  )}
                </ShowDetailsContainer>
              </Show>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}

ShowsWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  upcomingShows: PropTypes.arrayOf(
    PropTypes.shape({
      venue: PropTypes.string,
      location: PropTypes.string,
      secondaryInfo: PropTypes.string,
      date: PropTypes.object,
      posterAlt: PropTypes.string,
      showPoster: PropTypes.string,
      ticketsUrl: PropTypes.string,
      ticketsText: PropTypes.string,
      ticketsAtDoor: PropTypes.bool,
    })
  ),
}

const Shows = ({ data }) => {
  const {
    title,
    main,
    contact,
    upcomingShows,
  } = data.file.childMarkdownRemark.frontmatter

  return <ShowsWrapper data={{ title, main, contact, upcomingShows }} />
}

export default Shows

export const query = graphql`
  {
    file(relativePath: { eq: "shows.md" }) {
      id
      childMarkdownRemark {
        frontmatter {
          upcomingShows {
            venue
            location
            secondaryInfo
            date(formatString: "MM/DD/YYYY")
            posterAlt
            showPoster
            ticketsUrl
            ticketsText
            ticketsAtDoor
          }
          title
          main
          contact
        }
      }
    }
  }
`
