import React from "react"
import { CounterDisplay } from "./CounterDisplay"
import { useState, useEffect } from 'react'

export function Counter({ initialValue = 0, intervalValue = 1000 }) {
    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {{
        const interval = setInterval(() => {
            setCounter(counter + 1)
            console.log(`Counter is ${counter}`)
        }, intervalValue)

        return () => {
            clearInterval(interval)
        }}
    }, [counter])

    useEffect(() => {
        console.log('Counter has mounted')

        return () => {
            console.log(`Counter has unmounted. Counter is now ${counter}`)
        }
    }, [])

    return (
        <div>
            <CounterDisplay displayCount={counter}/>
        </div>
    )
}
