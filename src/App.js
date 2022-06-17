import React from "react";
import { useState } from 'react';
import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export function App() {
    const [language, setLanguage] = useState('en')

    function handleLanguageChange(event) {
        setLanguage(event.target.value)
    }
    
    return (
        <>
            <LanguageContext.Provider value={language}>
                <Container>
                    <select value={language} onChange={handleLanguageChange}>
                        <option value="en">ENGLISH</option>
                        <option value="it">ITALIANO</option>
                    </select>
                    <DisplayLanguage />
                </Container>
            </LanguageContext.Provider>
        </>
    )
}