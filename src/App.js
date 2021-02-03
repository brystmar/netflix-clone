import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import { routerPaths } from "./constants/routerPaths"
import { Home, Signin, Signup, Browse } from "./pages"

export default function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path={routerPaths.signin}>
                        <Signin />
                    </Route>

                    <Route path={routerPaths.signup}>
                        <Signup />
                    </Route>

                    <Route path={routerPaths.browse}>
                        <Browse />
                    </Route>

                    <Route path={routerPaths.home}>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
