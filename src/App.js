import React from "react";
import { Container } from "./Container";
import { Welcome } from "./Welcome";
import { Login } from "./Login";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Container title={<h1>My Container</h1>}>
                    <Welcome />
                    <Login />
                </Container>
            </div>
        )
    }
}