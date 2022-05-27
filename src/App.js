import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={<strong>Amalia</strong>} age={26}/>
                <Counter />
            </div>
        )
    }
}