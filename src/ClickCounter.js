import React from "react";
import { useState } from 'react';

export function ClickCounter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue)

    function incrementCount() {
        setCounter((c) => c + 1)
    }

    return (
        <div>
            <h3>Count: {counter}</h3>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}

ClickCounter.defaultProps = {
    initialValue: 0,
    incrementAmount: 1,
}