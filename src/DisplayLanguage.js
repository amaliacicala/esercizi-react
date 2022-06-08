import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: {
        WELCOME_MESSAGE: "Hello, world"
    },
    it: {
        WELCOME_MESSAGE: "Ciao mondo"
    }
}

export class DisplayLanguage extends React.Component {
    render() {
        return (
        <div>
            <LanguageContext.Consumer>
                { language => {
                    return (
                        <div>
                            <p>
                                {Strings[language].WELCOME_MESSAGE}
                            </p>
                        </div>
                    )
                }}
            </LanguageContext.Consumer>
         </div>
        )
    }
}