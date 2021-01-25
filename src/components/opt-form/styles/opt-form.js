import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  margin-top: 1.25em;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  font-size: 1.6rem;
  max-width: 450px;
  width: 100%;
  height: 2.75em;
  border: none;
  padding: 0.6em;
  
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  height: 2.75em;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  border: none;
  padding: 0 1.5em;
  cursor: pointer;

  img {
    margin-left: 0.4em;
    filter: brightness(0) invert(1);
    width: 1em;

    @media (max-width: 1000px) {
      width: 0.6em;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1.25em;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.4em;
  }
`;
