import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3.75em 3.5em;
  margin: auto;

  @media (max-width: 1000px) {
    padding: 3.25em 2em;
  }
  
  @media (max-width: 600px) {
    padding: 2.75em 1.35em;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1em;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`

export const Link = styled.a`
  font-size: 0.8rem;
  color: #757575;
  margin-bottom: 1.5em;
  text-decoration: none;
`

export const Title = styled.p`
  font-size: 1.2rem;
  color: #757575;
  margin-bottom: 2.5em;
  text-align: center;
  cursor: default;
`

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`
