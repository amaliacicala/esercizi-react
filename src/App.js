import React from "react";
import { Container } from "./Container";
import { Welcome } from "./Welcome";
import { Sum } from "./Sum";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Container title={<h1>My Container</h1>}>
                    <Welcome name={<strong>Amalia</strong>}/>
                    <Sum numbers={[2, 6, 12, 42]}/>
                </Container>
            </div>
        )
    }
}