import React, { useState } from "react"
import { Container, Inner, Title, Header, Body, Item, Frame } from "./styles/accordion";

export default function Accordion({ children, ...props }) {
    return <Container {...props}>
        <Inner>{children}</Inner>
    </Container>
}

Accordion.Frame = function AccordionFrame({ children, ...props }) {
    return <Frame {...props}>{children}</Frame>
}

Accordion.Item = function AccordionItem({ children, ...props }) {
    return <Item {...props}>{children}</Item>
}

Accordion.Title = function AccordionTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>
}

Accordion.Header = function AccordionHeader({ children, ...props }) {
    return <Header {...props}>{children}</Header>
}

Accordion.Body = function AccordionBody({ children, ...props }) {
    return <Body {...props}>{children}</Body>
}
