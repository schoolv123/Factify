import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import Main from './components/Main';
export default function App() {
    return <>
        <Router>
            <Main />
        </Router>
    </>;
}