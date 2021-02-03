import React from "react"
import { Header, Profiles } from "../components"
import { routerPaths } from "../constants/routerPaths"

export function SelectProfileContainer(props) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo
                        to={routerPaths.home}
                        src="/images/misc/logo.svg"
                        alt="React-Flix"
                    />
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        onClick={() => props.setProfile({
                            displayName: props.user.displayName,
                            photoURL:    props.user.photoURL
                        })}
                    >
                        <Profiles.Picture src={props.user.photoURL} />
                        <Profiles.Name>{props.user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}

SelectProfileContainer.defaultProps = {
    user: {
        displayName: "",
        photoURL:    ""
    }
}
