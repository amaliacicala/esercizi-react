import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Login } from "./Login";

export class App extends React.Component {
    render() {
        return (
            <div>
                <ClickCounter />
                <Login />
            </div>
        )
    }
}