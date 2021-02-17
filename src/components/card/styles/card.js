import styled from 'styled-components';

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e5e5e5;
  margin-left: 2.3em;
  margin-right: 2.3em;
  margin-top: 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
    }
  }
`

export const Subtitle = styled.p`
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
  display: none;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
`

export const Text = styled.p`
  font-size: 0.625rem;
  line-height: normal;
  display: none;
  color: white;
  margin-top: 0.5em;
  margin-bottom: 0;
  user-select: none;
`

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`

export const Meta = styled.div`
  display: none;
  background-color: #0000008f;
  position: absolute;
  bottom: 0;
  padding: 10px;
`

export const Image = styled.img`
  width: 100%;
  max-width: 305px;
  height: auto;
  margin: 0;
  border: 0;
  padding: 0;
  cursor: pointer;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 5px;
  cursor: pointer;
  transition: transform 200ms linear;

  &:hover {
    transform: scale(1.2);
    z-index: 99;
  }

  @media (min-width: 1000px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${Subtitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 56px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`

export const FeatureText = styled.p`
  font-size: 1.125rem;
  font-weight: ${({ fontWeight }) => fontWeight === 'bold' ? 'bold' : 'normal'};
  color: white;
  margin: 0;

  @media (max-width: 800px) {
    line-height: 1.25em;
  }
`

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 360px;
  background: url(${({ src }) => src});
  background-size: contain;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 1.25rem;
      line-height: 1em;
      margin-bottom: 0.5em;
    }

    ${FeatureText} {
      font-size: 0.875rem;
    }
  }
`

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`

export const FeatureClose = styled.button`
  position: absolute;
  color: white;
  background-color: transparent;
  right: 1.25em;
  top: 1.25em;
  border: 0;
  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
  border-radius: 15px;
  width: 20px;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`