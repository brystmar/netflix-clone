import React from "react"
import { Background, Container, Logo, ButtonLink } from "./styles/header"
import { Link as ReachRouterLink } from "react-router-dom"

export default function Header({ bg = true, children, ...props }) {
    return bg ? <Background {...props}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, children, ...props }) {
    return (
        <ReachRouterLink to={to}>{children}
            <Logo {...props} />
        </ReachRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({to, children, ...props}) {
    return <ButtonLink to={to} {...props}>{children}</ButtonLink>
}