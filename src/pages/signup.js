import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import { Form } from "../components"
import { FirebaseContext } from "../context/firebase"
import { routerPaths } from "../constants/routerPaths"

export default function Signup() {
    const [ name, setName ] = useState('')
    const [ emailAddress, setEmailAddress ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('')
    const [ error, setError ] = useState('')
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const isInvalid = name === '' || password === '' || emailAddress === '' || password !== passwordConfirmation

    const handleSignup = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user.updateProfile({
                        displayName: name,
                        photoURL:    Math.floor(Math.random() * 5) + 1
                    }
                ).then(() => history.push(routerPaths.browse))
            )
            .catch((error) => {
                setEmailAddress("");
                setPassword("");
                setError(error.message)
            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="Name"
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={passwordConfirmation}
                            autoComplete="off"
                            placeholder="Confirm Password"
                            onChange={({ target }) => setPasswordConfirmation(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign Up
                        </Form.Submit>

                        <Form.Text>
                            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by crossing your fingers and squinting really
                            hard.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}