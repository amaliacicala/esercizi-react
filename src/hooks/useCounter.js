import { useState } from 'react';

export function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    function incrementCount() {
        setCounter(c => c + 1)
    }

    function decrementCount() {
        setCounter(c => c - 1)
    }

    function resetCount() {
        setCounter(initialValue)
    }

    return {
        counter: counter,
        onIncrement: incrementCount,
        onDecrement: decrementCount,
        onReset: resetCount
    }
}