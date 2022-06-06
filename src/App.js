import React from "react";
import { Welcome } from "./Welcome";
import { Login } from "./Login";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome />
                <Login />
            </div>
        )
    }
}