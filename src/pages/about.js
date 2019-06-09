// import PropTypes from "prop-types"
import React, { useState } from "react"
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

const About = () => {
  const [openEtherealSection, toggleOpenEtherealSection] = useState(true)
  return (
    <Layout>
      <SEO
        title="About"
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
      <PageHeading>About</PageHeading>
      <AboutImage
        src={bandImage}
        alt="Gerrit Feenstra and Chris Trian, the two members of Lone Control."
      />
      <AccordionControls>
        <AccordionButton
          isExpanded={openEtherealSection}
          disabled={openEtherealSection}
          onClick={() => toggleOpenEtherealSection(!openEtherealSection)}
        >
          <SectionHeading>Ethereal version</SectionHeading>
        </AccordionButton>
        <AccordionButton
          isExpanded={!openEtherealSection}
          disabled={!openEtherealSection}
          onClick={() => toggleOpenEtherealSection(!openEtherealSection)}
        >
          <SectionHeading>Tangible version</SectionHeading>
        </AccordionButton>
      </AccordionControls>
      <AccordionContainer>
        <AboutSection isExpanded={openEtherealSection}>
          <p>Lone Control is a blip. Shrill. Loud. And now.</p>

          <p>
            You can live your life without so many things, so many experiences,
            purchased or otherwise.
          </p>

          <p>
            You can live your life without hearing Lone Control or the Rolling
            Stones.
          </p>

          <p>
            Or, you can live inclusively. Inclusive of joy, of pain, and of the
            noise between, wherein Lone Control may be your guide.
          </p>

          <p>
            Lone Control occupy the space of the now, a disposable place of
            anxiety and aggregation. The future holds only the next moment, or a
            thousand miles of blank space. Dealer’s choice, curated for
            convenience.
          </p>

          <p>
            Lone Control question the means of the why. The push pull incentive
            of aging and irrelevance. One inconsequential notion in a long array
            of impotence. And yet, we exist. We breathe. We sweat. We bleed and
            fight and beg for meaning. The silence is an invitation.
          </p>

          <p>
            Lone Control’s debut is a flash in the pan, arresting, burning
            bright while waning focus may last. Four hints at a larger question,
            too large to answer now. That moment will come in time. For now,
            there is only this. Here. There. Gone.
          </p>
        </AboutSection>
        <AboutSection isExpanded={!openEtherealSection}>
          <p>Lone Control is a blip. Shrill. Loud. And now.</p>

          <p>
            Lone Control is born from common desire. Desire to break free of the
            predetermination of the daily millstone grind. This is not a
            hardened desire, but one that continues to bubble and burst with
            time. What Chris and Gerrit each bring to the creative circle rarely
            overlaps. These are unfitting pieces, made to lay together
            awkwardly, unrefined and unhinged.
          </p>

          <p>
            Chris and Gerrit met at a downtown Phoenix bar. The former, from an
            El Paso punk background, fresh to the city. The latter, a return
            resident, after years apart making electronic music in Seattle. The
            two hit it off immediately, finding common ground in Nine Inch
            Nails, Brainiac, and the early works of Steve Albini.
          </p>

          <p>
            Older than they once were but not yet beyond the pale, Lone Control
            represents a knowing outburst – a cry, not for help or attention,
            but to rally any who might find need. Their creations are crude and
            abrasive by design. Rarely in this age of immediacy do they find
            meaningful value in the overwrought.{" "}
          </p>

          <p>
            Lone Control’s debut is a flash in the pan, arresting, burning
            bright while waning focus may last. Four hints at a larger question,
            too large to answer now. That moment will come in time. For now,
            there is only this. Here. There. Gone.{" "}
          </p>
        </AboutSection>
      </AccordionContainer>
    </Layout>
  )
}

export default About
