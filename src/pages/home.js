import React from "react"
import { JumbotronContainer } from "../containers/jumbotron";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { Feature, OptForm } from "../components";

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email" />
                        <OptForm.Button>Try It Now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Enter your email to start your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
