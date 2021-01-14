import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";


function App() {
    return (
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
                    <p>Placeholder: Homepage</p>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
