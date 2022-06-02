import React from "react";
import { Colors } from "./Colors";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Colors colors={['Yellow', 'White', 'Purple', 'Black']}/>
            </div>
        )
    }
}