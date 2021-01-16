import styled from "styled-components"

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction};
    max-width: 1100px;
    margin: auto;
    width: 100%;
    
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

export const Item = styled.div`
    display: flex;
    
`

export const Container = styled.section`
    
`

export const Title = styled.h1`
    font-size: ${50/16}rem;
    line-height: 1.1;
    margin-bottom: 8px;
    
    @media (max-width: 1000px) {
        font-size: ${35/16}rem;
    }
`

export const SubTitle = styled.h1`
    font-size: 1.625rem;
    font-weight: normal;
    line-height: normal;
    
    @media (max-width: 600px) {
        font-size: 1.125rem;
    }
`

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`

