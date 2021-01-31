import React from "react"
import ReactDOM from "react-dom"
import "./normalize.css"
import { GlobalStyles } from "./global-styles"
import App from "./App"
import { FirebaseContext } from "./context/firebase"
import { firebaseConfig } from "./constants/firebaseConfig"

const firebase = window.firebase.initializeApp(firebaseConfig);
// const firebaseAnalytics = window.firebase.analytics();

ReactDOM.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
