import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ControlledForm } from "./ControlledForm";
import { GithubUser } from "./GithubUser";

export function App() {
    return (
        <div>
            <ClickCounter />
            <GithubUser />
            <ControlledForm />
        </div>
    )
}