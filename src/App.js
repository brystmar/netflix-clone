import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import { routerPaths } from "./constants/routerPaths"
import { Home, Signin } from "./pages"

export default function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path={routerPaths.signin}>
                        <Signin />
                    </Route>

                    <Route path={routerPaths.register}>
                        <p>Placeholder: Registration page</p>
                    </Route>

                    <Route path={routerPaths.browse}>
                        <p>Placeholder: Browse content</p>
                    </Route>

                    <Route path={routerPaths.home}>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
