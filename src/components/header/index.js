import React from "react"
import {
    Background,
    Container,
    Logo,
    ButtonLink,
    Link,
    Text,
    Group,
    Feature,
    FeatureCallOut,
    PlayButton
} from "./styles/header"
import { Link as ReachRouterLink } from "react-router-dom"

export default function Header({ bg = true, children, ...props }) {
    return bg ? <Background {...props}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...props }) {
    return <Group {...props}>{children}</Group>
}

Header.Logo = function HeaderLogo({ to, children, ...props }) {
    return (
        <ReachRouterLink to={to}>{children}
            <Logo {...props} />
        </ReachRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...props }) {
    return <ButtonLink {...props}>{children}</ButtonLink>
}

Header.Text = function HeaderText({ children, ...props }) {
    return <Text {...props}>{children}</Text>
}

Header.Link = function HeaderLink({ children, ...props }) {
    return <Link {...props}>{children}</Link>
}

Header.Feature = function HeaderFeature({ children, ...props }) {
    return <Feature {...props}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...props }) {
    return <FeatureCallOut {...props}>{children}</FeatureCallOut>
}

Header.PlayButton = function HeaderPlayButton({ children, ...props }) {
    return <PlayButton {...props}>{children}</PlayButton>
}
