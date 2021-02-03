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

export const Group = styled.div`
  display: flex;
  align-items: center;
`

export const Text = styled.p`
  font-size: 1.4rem;
  color: #fff;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

export const Feature = styled(Container)`
  flex-direction: column;
  align-items: normal;
  padding: 150px 0 500px 0;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`

export const FeatureCallOut = styled.h2`
  font-size: 3.125rem;
  font-weight: bold;
  line-height: normal;
  color: white;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`

export const PlayButton = styled.button`
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #e6e6e6;
  color: #000;
  max-width: 130px;
  margin-top: 10px;
  border-width: 0;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  transition: background-color 0.5s ease;

  &:hover {
    background: #ff1e1e;
    color: white;
  }
`
