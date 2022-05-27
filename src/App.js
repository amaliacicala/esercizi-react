import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={<strong>Amalia</strong>} age={26}/>
                <ClickCounter />
            </div>
        )
    }
}