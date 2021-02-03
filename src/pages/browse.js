import React, { useState } from "react"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import { BrowseContainer } from "../containers/browse"
import { SelectProfileContainer } from "./profiles"
import { FirebaseContext } from "../context/firebase"

export default function Browse() {
    const [ profile, setProfile ] = useState({})

    const user = {
        displayName: "Snap",
        photoURL:    1
    }

    return profile.displayName ? (
        <>
            <BrowseContainer />
            <FooterContainer />
        </>
    ) : (
        <SelectProfileContainer />
    )
}
