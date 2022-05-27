import React from "react";
import { Counter } from "./Counter";

export class CounterDisplay extends React.Component {
    render() {
        return (
            <div>
                <h1>Count: {this.props.displayCount}</h1>
            </div>
        )
    }
}