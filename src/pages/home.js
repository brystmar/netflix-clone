import React from "react"
import JumbotronContainer from "../containers/jumbotron";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import FaqsContainer from "../containers/faqs";

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <p>Header placeholder</p>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
