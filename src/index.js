import React from "react"
import ReactDOM from "react-dom"
import "./normalize.css"
import { GlobalStyles } from "./global-styles"
import App from "./App"
import firebase from "firebase/app"
import "firebase/analytics"
import "firebase/auth"
import "firebase/firestore"
import { FirebaseContext } from "./context/firebase"
import { firebaseConfig } from "./constants/firebaseConfig"
import seedDatabase from "./seed"

// Initialize Firebase using our config
firebase.initializeApp(firebaseConfig);
// firebase.auth();
// Initialize the Firebase analytics
// firebase.analytics();

let db = firebase.firestore();

// Hydrate our db with seed data
seedDatabase(db);

ReactDOM.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
