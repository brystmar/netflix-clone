import React from "react"
import { Header } from "../components"
import { routerPaths } from "../constants/routerPaths"

export default function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo
                    to={routerPaths.home}
                    src="/images/misc/logo.svg"
                    alt="Netflix" />
                <Header.ButtonLink to={routerPaths.signin}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
