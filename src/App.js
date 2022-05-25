import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Age } from "./Age";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={<strong>Amalia</strong>}/>
            </div>
        )
    }
}

// Welcome.defaultProps = {
//     name: 'Victor',
// }