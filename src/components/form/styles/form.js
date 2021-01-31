import styled from "styled-components"
import { Link as ReachRouterLink } from "react-router-dom"

export const Container = styled.section`
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  min-height: 660px;
  width: 100%;
  max-width: 450px;
  border-radius: 5px;
  margin: auto auto 100px auto;
  padding: 3.75em 4.25em 3.75em;
`

export const Error = styled.div`
  font-size: 14px;
  background: #e87c03;
  color: white;
  margin: 0 0 1.15em;
  padding: 1.05em 1.425em;
  border-radius: 4px;
`

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.9em;
`

export const Text = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: #737373;
`

export const TextSmall = styled.h2`
  font-size: 0.81rem;
  color: #8c8c8c;
  margin-top: 0.7em;
  line-height: normal;
`

export const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Input = styled.input`
  background: #333;
  color: #fff;
  height: 3.125em;
  line-height: 3.125em;
  margin-bottom: 1.25em;
  border-radius: 4px;
  border: 0;
  padding: 0.325em 1.25em;

  &:last-of-type {
    margin-bottom: 1.9em;
  }
`

export const Submit = styled.button`
  font-size: 1rem;
  font-weight: bold;
  background: #e50914;
  color: white;
  margin: 0 0 0.75em;
  border: 0;
  border-radius: 4px;
  padding: 1em;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`
