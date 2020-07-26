// import PropTypes from "prop-types"
import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/headings/page-heading"
import bandImage from "../images/pressshot2019.jpg"

const AccordionButton = styled.button`
  margin-right: 2rem;
  background-color: ${({ theme }) => theme.colors.MUMMYS_TOMB};
  color: ${({ theme }) => theme.colors.PLATINUM};
  border-radius: 1px;
  padding: 1rem;
  font-size: 2rem;
  font-weight: 600;
  align-self: center;
  max-width: 50%;
  text-align: center;
  display: table;
  display: flex;
  align-items: center;

  h3 {
    opacity: ${({ isExpanded }) => (!isExpanded ? "1.0" : "0.75")};
    padding: 0;
  }
  &:hover {
    font-style: italic;
  }
  cursor: ${({ isExpanded }) => (isExpanded ? "default" : "pointer")};
`
const SectionHeading = styled.h3``

const AboutImage = styled.img`
  object-fit: contain;
  align-self: flex-start;
  margin-bottom: 2rem;
  max-width: 60rem;
  max-width: 70vw;
  height: 600px;
  max-height: 60vh;
  object-position: 0% 50%;
  @media (max-width: 600px) {
    max-width: 90vw;
  }
`

const AccordionContainer = styled.div`
  display: table;
  display: flex;
  justify-items: space-between;
  width: 60rem;
  max-width: 70vw;
  margin-top: 2rem;
  @media (max-width: 600px) {
    max-width: 90vw;
  }
`

const AccordionControls = styled.div`
  width: 60rem;
  display: table;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  max-width: 70vw;
  @media (max-width: 600px) {
    max-width: 90vw;
    h3 {
      font-size: 1.5rem;
    }
  }
`
const AboutSection = styled.div`
  width: 60rem;
  max-width: 60vw;
  margin-bottom: 2rem;
  width: ${({ isExpanded }) => (isExpanded ? "100%" : "0")};
  display: ${({ isExpanded }) => (isExpanded ? "block" : "none")};
  p {
    margin-bottom: 0.8rem;
    opacity: ${({ isExpanded }) => (isExpanded ? "1.0" : "0")};
    visibility: ${({ isExpanded }) => (isExpanded ? "1.0" : "0")};
  }
  @media (max-width: 600px) {
    max-width: 90vw;
  }
  transition: opacity 1000ms, visibility 1000ms;
`

const SEO_ABOUT_KEYWORDS = [
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

const About = ({ data }) => {
  const {
    title,
    leadImage,
    leadImageAlt,
    etherealLead,
    etherealContent,
    tangibleLead,
    tangibleContent,
  } = data.file.childMarkdownRemark.frontmatter

  const [openEtherealSection, toggleOpenEtherealSection] = useState(true)
  return (
    <Layout>
      <SEO title="About" keywords={SEO_ABOUT_KEYWORDS} />
      <PageHeading>{title}</PageHeading>
      <AboutImage src={leadImage} alt={leadImageAlt} />
      <AccordionControls>
        <AccordionButton
          isExpanded={openEtherealSection}
          disabled={openEtherealSection}
          onClick={() => toggleOpenEtherealSection(!openEtherealSection)}
        >
          <SectionHeading>{etherealLead}</SectionHeading>
        </AccordionButton>
        <AccordionButton
          isExpanded={!openEtherealSection}
          disabled={!openEtherealSection}
          onClick={() => toggleOpenEtherealSection(!openEtherealSection)}
        >
          <SectionHeading>{tangibleLead}</SectionHeading>
        </AccordionButton>
      </AccordionControls>
      <AccordionContainer>
        <AboutSection
          isExpanded={openEtherealSection}
          dangerouslySetInnerHTML={{ __html: etherealContent }}
        />
        <AboutSection
          isExpanded={!openEtherealSection}
          dangerouslySetInnerHTML={{ __html: tangibleContent }}
        />
      </AccordionContainer>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    file(relativePath: { eq: "about.md" }) {
      id
      childMarkdownRemark {
        frontmatter {
          title
          leadImage
          leadImageAlt
          etherealLead
          etherealContent
          tangibleLead
          tangibleContent
        }
      }
    }
  }
`
