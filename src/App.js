import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/home"

export default function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/login">
                        <p>Placeholder: Login page</p>
                    </Route>

                    <Route path="/register">
                        <p>Placeholder: Registration page</p>
                    </Route>

                    <Route path="/browse">
                        <p>Placeholder: Browse content</p>
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
