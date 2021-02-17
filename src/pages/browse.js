import React from "react"
import { BrowseContainer } from "../containers/browse"
import { useContent } from "../hooks";
import selectionMap from "../utils/selection-map"

export default function Browse() {
    const { tv } = useContent('tv')
    const { movies } = useContent('movies')
    const slides = selectionMap({ tv, movies })

    return <BrowseContainer slides={slides} />
}
