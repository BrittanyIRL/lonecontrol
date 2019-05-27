import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import PropTypes from "prop-types"

import backgroundImage from "../../images/lc_house_bw.png"
import textImage from "../../images/lc_ep_text.png"

const SplashContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const SplashText = styled.a`
  background-image: url(${textImage});
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

const Splash = () => (
  <SplashContainer>
    <SplashText
      alt="Visit Bandcamp to hear the debut EP"
      href="www.bandcamp.com/lonecontrol"
      aria-description="Lone Control"
    />
    <EnterSite to="/home/">Enter Site</EnterSite>
  </SplashContainer>
)

Splash.propTypes = {
  onEnterSite: PropTypes.func,
}

export default Splash
