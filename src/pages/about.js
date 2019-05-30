// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/headings/page-heading"
import HorizontalLine from "../components/accents/horizontal-line"
import bandImage from "../images/pressshot2019.jpg"

const SectionHeading = styled.h3`
  &::last-of-type {
    color: red;
  }
`

const AboutImage = styled.img`
  object-fit: contain;
  align-self: flex-start;
  margin-bottom: 2rem;
  max-width: 60rem;
  @media (max-width: 600px) {
    max-width: 90vw;
  }
`
const AboutSection = styled.div`
  width: 60rem;
  max-width: 60vw;
  margin-bottom: 2rem;
  p {
    margin-bottom: 0.8rem;
  }
  @media (max-width: 600px) {
    max-width: 90vw;
  }
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <PageHeading>About</PageHeading>
    <AboutImage
      src={bandImage}
      alt="Chris Trian and Gerrit Feenstra, the two members of Lone Control standing somewhere."
    />
    <AboutSection>
      <SectionHeading>Ethereal version</SectionHeading>

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
        Lone Control occupy the space of the now, a disposable place of anxiety
        and aggregation. The future holds only the next moment, or a thousand
        miles of blank space. Dealer’s choice, curated for convenience.
      </p>

      <p>
        Lone Control question the means of the why. The push pull incentive of
        aging and irrelevance. One inconsequential notion in a long array of
        impotence. And yet, we exist. We breathe. We sweat. We bleed and fight
        and fuck and beg for meaning. The silence is an invitation.
      </p>

      <p>
        Lone Control’s debut is a flash in the pan, arresting, burning bright
        while waning focus may last. Four hints at a larger question, too large
        to answer now. That moment will come in time. For now, there is only
        this. Here. There. Gone.
      </p>
    </AboutSection>
    <HorizontalLine />
    <AboutSection>
      <SectionHeading>Tangible version</SectionHeading>

      <p>Lone Control is a blip. Shrill. Loud. And now.</p>

      <p>
        Lone Control is born from common desire. Desire to break free of the
        predetermination of the daily millstone grind. This is not a hardened
        desire, but one that continues to bubble and burst with time. What Chris
        and Gerrit each bring to the creative circle rarely overlaps. These are
        unfitting pieces, made to lay together awkwardly, unrefined and
        unhinged.
      </p>

      <p>
        Chris and Gerrit met at a downtown Phoenix bar over the discussion of an
        At The Drive-In t-shirt. The former, from an El Paso punk background,
        fresh to the city. The latter, a return resident, after years apart
        making electronic music in Seattle. The two hit it off immediately,
        finding common ground in Nine Inch Nails, Brainiac, and the early works
        of Steve Albini.
      </p>

      <p>
        Older than they once were but not yet beyond the pale, Lone Control
        represents a knowing outburst – a cry, not for help or attention, but to
        rally any who might find need. Their creations are crude and abrasive by
        design. Rarely in this age of immediacy do they find meaningful value in
        the overwrought.{" "}
      </p>

      <p>
        Lone Control’s debut is a flash in the pan, arresting, burning bright
        while waning focus may last. Four hints at a larger question, too large
        to answer now. That moment will come in time. For now, there is only
        this. Here. There. Gone.{" "}
      </p>
    </AboutSection>
  </Layout>
)

export default About
