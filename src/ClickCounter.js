import React from "react";
import { useEffect, useState } from 'react';

export function ClickCounter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue)

    useEffect(onCounterChange, [counter])

    useEffect(() => {
        console.log('Counter has mounted')

        return () => {
            console.log('Counter is about to be unmounted')
        }
    }, [])

    function onCounterChange() {
        return console.log(`The counter is now ${counter}`)
    }

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