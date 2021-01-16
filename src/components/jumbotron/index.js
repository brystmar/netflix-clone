import React from "react"
import { Item, Inner, Container, Title, SubTitle } from "./styles/jumbotron"

export default function Jumbotron({ children, direction = 'row', ...props }) {
    return (
        <Item {...props}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Jumbotron.Title = function JumbotronTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...props }) {
    return <SubTitle {...props}>{children}</SubTitle>
}
