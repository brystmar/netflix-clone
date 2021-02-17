import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { routerPaths } from "./constants/routerPaths"
import { Home, Signin, Signup, Browse } from "./pages"
import { useAuthListener } from "./hooks"
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

export default function App() {
    const { user } = useAuthListener();

    return (
        <div className="app">
            <Router>
                <Switch>
                    <IsUserRedirect
                        user={user} loggedInPath={routerPaths.browse} path={routerPaths.signin}
                    >
                        <Signin />
                    </IsUserRedirect>

                    <IsUserRedirect
                        user={user} loggedInPath={routerPaths.browse} path={routerPaths.signup}
                    >
                        <Signup />
                    </IsUserRedirect>

                    <ProtectedRoute user={user} path={routerPaths.browse}>
                        <Browse />
                    </ProtectedRoute>


                    <IsUserRedirect
                        // Redirect requests from home to /browse when user is logged in
                        user={user} loggedInPath={routerPaths.browse} path={routerPaths.home}
                    >
                        <Home />
                    </IsUserRedirect>
                </Switch>
            </Router>
        </div>
    )
}
