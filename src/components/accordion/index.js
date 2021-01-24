import React, { useState, useContext, createContext, useRef } from "react"
import { Container, Inner, Title, Header, Body, Item, Frame } from "./styles/accordion";

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
    const [ toggleShow, setToggleShow ] = useState(false)

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...props}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Title = function AccordionTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>
}

Accordion.Header = function AccordionHeader({ children, ...props }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext)
    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...props}>
            {children}
            {toggleShow ? (
                <img src="./images/icons/minus.png" alt="Close" />
            ) : (
                <img src="./images/icons/add.png" alt="Open" />
            )}
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, ...props }) {
    const { toggleShow } = useContext(ToggleContext)
    const bodyRef = useRef(null)

    const dynamicStyles = {
        maxHeight:  toggleShow ? "500px" : "0",
        transition: toggleShow ? "max-height 1050ms ease-in" : "max-height 1050ms ease-out"
    }

    return <Body ref={bodyRef} style={dynamicStyles} {...props}>{children}</Body>
}
