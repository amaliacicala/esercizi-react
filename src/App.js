import React from "react";
import { Counter } from "./Counter";
import { useState } from 'react';
import { ClickCounter } from "./ClickCounter";
import { GithubUser } from "./GithubUser";

export function App() {
    const [showCounter, setShowCounter] = useState(true)

    function toggleCounter() {
        setShowCounter(show => !show)
    }

    return (
        <div>
            <GithubUser />
            {showCounter && <Counter />}
            <button onClick={toggleCounter}>Unmount Counter</button>
            <ClickCounter />
        </div>
    )
}