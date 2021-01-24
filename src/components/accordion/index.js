import React, { useState, useContext, createContext } from "react"
import { Container, Inner, Title, Header, Body, Item, Frame } from "./styles/accordion"

export const ToggleContext = createContext(undefined, undefined)

export default function Accordion({ children, ...props }) {
    return <Container {...props}>
        <Inner>{children}</Inner>
    </Container>
}

Accordion.Frame = function AccordionFrame({ children, ...props }) {
    return <Frame {...props}>{children}</Frame>
}

Accordion.Item = function AccordionItem({ children, ...props }) {
    const [ isCollapsed, setIsCollapsed ] = useState(true)

    return (
        <ToggleContext.Provider value={{ isCollapsed, setIsCollapsed }}>
            <Item {...props}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Title = function AccordionTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>
}

Accordion.Header = function AccordionHeader({ children, ...props }) {
    const { isCollapsed, setIsCollapsed } = useContext(ToggleContext)
    return (
        <Header onClick={() => setIsCollapsed(!isCollapsed)} {...props}>
            {children}
            {isCollapsed ? <img src="./images/icons/add.png" alt="Open" />
                : <img src="./images/icons/minus.png" alt="Close" />}
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, ...props }) {
    const { isCollapsed } = useContext(ToggleContext)

    const dynamicStyles = {
        opacity:    isCollapsed ? 0 : 1,
        maxHeight:  isCollapsed ? "0" : "500px",
        transition: isCollapsed ? "max-height 550ms ease-in-out, opacity 150ms linear 0ms"
                        : "max-height 550ms ease-in-out, opacity 150ms linear 150ms"
    }

    return <Body style={dynamicStyles} {...props}>{children}</Body>
}
