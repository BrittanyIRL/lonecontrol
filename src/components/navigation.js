import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components/macro"

// break for smol views at 600px

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem 0 3rem;
  @media (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 3rem;
  }
`

const LinksContainer = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    display: flex;
    visibility: ${({ showForMobile }) =>
      showForMobile ? "visible" : "hidden"};
    opacity: ${({ showForMobile }) => (showForMobile ? 1 : 0)};

    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    height: ${({ showForMobile }) => (showForMobile ? "100vh" : "0")};
    transition: visibility 1s linear 300ms, opacity 300ms;
  }
`
LinksContainer.propTypes = {
  showForMobile: PropTypes.bool,
}

const SiteNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  font-size: 1.8rem;
`
const SocialNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin-top: 2rem;
  font-size: 1.4rem;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const SiteHeaderLink = styled(Link)`
  color: ${({ theme }) => theme.colors.RAISIN_BLACK};
  font-weight: 700;
  font-size: 3.4rem;
  &.active {
    color: ${({ theme }) => theme.colors.RAISIN_BLACK};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

const NavMenuButton = styled.button`
  margin-top: 1rem;
  position: relative;
  width: 4rem;
  height: 4rem;
  border-top: 0.2em solid ${({ theme }) => theme.colors.MUMMYS_TOMB};
  border-bottom: 0.2em solid ${({ theme }) => theme.colors.MUMMYS_TOMB};

  &:before {
    content: "";
    position: absolute;
    top: 1.5rem;
    left: 0px;
    width: 100%;
    border-top: 0.2em solid ${({ theme }) => theme.colors.MUMMYS_TOMB};
  }

  @media (min-width: 600px) {
    display: none;
  }
`
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.RAISIN_BLACK};
  width: 100%;
  line-height: 1.4;
  padding: 0.1rem 0;
  &:hover {
    text-decoration: line-through;
  }
  &.active {
    color: ${({ theme }) => theme.colors.FELDGRAU};
    &:hover {
      text-decoration: none;
      cursor: default;
    }
  }
`

const Navigation = ({ showNav, onClickToggleNav }) => {
  console.log("nav??? ", showNav)
  return (
    <NavigationContainer>
      <HeaderContainer>
        <h1>
          <SiteHeaderLink>Lone Control</SiteHeaderLink>
        </h1>
        <NavMenuButton onClick={() => onClickToggleNav(!showNav)} />
      </HeaderContainer>
      <LinksContainer showForMobile={showNav}>
        <SiteNavigation>
          <StyledLink activeClassName="active" to="/about/">
            About
          </StyledLink>
          <StyledLink activeClassName="active" to="/releases/">
            Releases
          </StyledLink>
          <StyledLink activeClassName="active" to="/shows/">
            Shows
          </StyledLink>
          <StyledLink activeClassName="active" to="/listen/">
            Listen
          </StyledLink>
          <StyledLink activeClassName="active" to="/watch/">
            Watch
          </StyledLink>
        </SiteNavigation>
        <SocialNavigation>
          <StyledLink activeClassName="active" to="#">
            BandCamp
          </StyledLink>
          <StyledLink activeClassName="active" to="#">
            Soundcloud
          </StyledLink>
          <StyledLink activeClassName="active" to="#">
            Instagram
          </StyledLink>
          <StyledLink activeClassName="active" to="#">
            Twitter
          </StyledLink>
        </SocialNavigation>
      </LinksContainer>
    </NavigationContainer>
  )
}

Navigation.propTypes = {
  showNav: PropTypes.bool.isRequired,
  onClickToggleNav: PropTypes.func.isRequired,
}
export default Navigation
