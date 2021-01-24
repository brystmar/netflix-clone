import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  border-bottom: 0.5em solid #222;
`

export const Frame = styled.div`
  margin-bottom: 1em;
`

export const Inner = styled.div`
  width: 100%;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 4.25em 3em;
`

export const Item = styled.div`
  color: white;
  margin-bottom: 0.8em;

  &:first-of-type {
    margin-top: 2.5em;
  }
`

export const Title = styled.h1`
  font-size: 3.25rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0.5em;
  color: #fff;
  text-align: center;
  cursor: default;

  @media (max-width: 600px) {
    font-size: 2.25rem;
  }
`

export const Header = styled.div`
  font-size: 1.85rem;
  font-weight: normal;
  width: 100%;
  background: #303030;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1px;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

export const Body = styled.div`
  font-size: 1.6rem;
  font-weight: normal;
  line-height: normal;
  overflow: hidden;
  background: #303030;
  align-items: center;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  
  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.35em;
  }
`
