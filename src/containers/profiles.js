import React from "react"
import { Header } from "../components"
import { routerPaths } from "../constants/routerPaths"

export function SelectProfileContainer() {
    return (
        <p>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo
                        to={routerPaths.home}
                        src="/images/misc/logo.svg"
                        alt="React-Flix"
                    />
                </Header.Frame>
            </Header>

        </p>
    )
}
