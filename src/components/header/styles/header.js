import styled from "styled-components"
import { Link as ReachRouterLink } from "react-router-dom"

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
          (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`

export const Container = styled.div`
  display: flex;
  margin: 0 3.5em;
  height: 4em;
  padding: 1.15em 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 1.875em;
  }
`

export const Logo = styled.img`
  height: 2em;
  width: 6.75em;
  margin-right: 2.5em;

  @media (min-width: 1449px) {
    height: 2.8em;
    width: 10.5em;
  }
`

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 1.875em;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

export const ButtonLink = styled(ReachRouterLink)`
  font-size: 0.93rem;
  background-color: #e50914;
  color: white;
  display: block;
  width: 5.75em;
  height: fit-content;
  border: 0;
  border-radius: 3px;
  padding: 0.55em 1.2em;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }
`
