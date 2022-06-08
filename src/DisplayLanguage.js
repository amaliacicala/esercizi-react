import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component {
    render() {
        return (
        <div>
            <LanguageContext.Consumer>
                { language => {
                    return (
                        <div>
                            <h1>
                                {language}
                            </h1>
                        </div>
                    )
                }}
            </LanguageContext.Consumer>
         </div>
        )
    }
}