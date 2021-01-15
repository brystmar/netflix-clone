import React from "react"
import { Item, Inner, Container } from "./styles/jumbotron"

export default function Jumbotron({ children, direction = 'row', ...props }) {
    return (
        <Item {...props}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({ children, ...props }) {
    return <Container {...props}>
        {children}
    </Container>
}
