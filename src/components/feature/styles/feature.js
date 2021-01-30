import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-bottom: 0.5em solid #222;
  padding: 10em 2.85em;
`

export const Title = styled.h1`
  font-size: 3.125rem;
  font-weight: 500;
  color: #fff;
  max-width: 640px;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 2.2em;
  }
`

export const Subtitle = styled.h2`
  font-size: 1.625rem;
  font-weight: normal;
  color: #fff;
  margin: 0.6em auto;

  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
`
