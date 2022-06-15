import React from "react";
import { Login } from "./Login";
import { Counter } from "./Counter";
import { useState } from 'react';
import { ClickCounter } from "./ClickCounter";

export function App() {
    const [showCounter, setShowCounter] = useState(true)

    function toggleCounter() {
        setShowCounter(show => !show)
    }

    return (
        <div>
            <button onClick={toggleCounter}>Unmount Counter</button>
            {showCounter && <Counter />}
            <Login />
            <ClickCounter />
        </div>
    )
}