import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: #fff;
  width: 100%;
  text-align: center;
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`

export const Name = styled.p`
  font-size: 1rem;
  color: #808080;
  text-overflow: ellipsis;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;
  border: 3px solid transparent;

  &:hover > ${Picture} {
    border-color: white;
    border-radius: 3px;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`