import React from "react"
import { Accordion, OptForm } from "../components"
import { faqData } from "../fixtures/index"

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {faqData.map((item) =>
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion.Frame>

            <OptForm>
                <OptForm.Input placeholder="Email" />
                <OptForm.Button>Try It Now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Enter your email to start your membership.</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}
