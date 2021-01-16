import React from "react"
import Jumbotron from "../components/jumbotron"
import { jumboData } from "../fixtures"

export default function JumbotronContainer() {
    const jumboDataElements = jumboData.map((item) =>
        <Jumbotron key={item.id}>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subtitle}</Jumbotron.SubTitle>
        </Jumbotron>
    )

    return (
        <Jumbotron.Container>
            {jumboDataElements}
        </Jumbotron.Container>
    )
}
