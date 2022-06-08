import React from "react";
import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export class App extends React.Component {
    state = {
        language: 'en'
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }
    render() {
        return (
            <>
                <LanguageContext.Provider value={this.state.language}>
                    <Container title={<h1>My Container</h1>}>
                        <select value={this.state.language} onChange={this.handleLanguageChange}>
                            <option value="en">ENGLISH</option>
                            <option value="it">ITALIANO</option>
                        </select>

                        <DisplayLanguage />
                    </Container>
                </LanguageContext.Provider>
            </>
        )
    }
}