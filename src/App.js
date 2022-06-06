import React from "react";
import { Container } from "./Container";
import { Welcome } from "./Welcome";
import { Login } from "./Login";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Welcome />
                    <Login />
                </Container>
            </div>
        )
    }
}