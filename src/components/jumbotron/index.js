import React from "react"
import { Item, Inner, Container, Title, Subtitle, Image, Pane } from "./styles/jumbotron"

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

Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...props }) {
    return <Subtitle {...props}>{children}</Subtitle>
}

Jumbotron.Pane = function JumbotronPane({ children, ...props }) {
    return <Pane {...props}>{children}</Pane>
}

Jumbotron.Image = function JumbotronImage({ ...props }) {
    return <Image {...props} />
}
