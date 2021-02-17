import styled from 'styled-components'

export const Container = styled.div``

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  margin: 0 20px;
`

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  background-color: transparent;
  opacity: 1;
  border: 0;
  cursor: pointer;
  
  &::before,
  &::after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: #ddd;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
  
  &:hover::before,
  &:hover::after
  {
    background-color: #fff;
  }
`

export const Button = styled.button`
  font-size: 1.125rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.5em;
  height: 2.5em;
  color: white;
  background-color: #e50914;
  border-color: #ff0a16;
  text-transform: uppercase;
  padding-left: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
`