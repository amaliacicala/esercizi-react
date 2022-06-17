import { useState, useCallback } from 'react';

export function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    const incrementCount = useCallback(function incrementCount() {
        setCounter(c => c + 1)
    }, [])

    const decrementCount = useCallback(function decrementCount() {
        setCounter(c => c - 1)
    }, [])

    const resetCount = useCallback(function resetCount() {
        setCounter(initialValue)
    }, [initialValue])
    // in questo caso dobbiamo passare la variabile initialValue nel dependancy array perché viene utilizzata nella funzione 'memoizzata' in useCallback (resetCount)

    return {
        counter: counter,
        onIncrement: incrementCount,
        onDecrement: decrementCount,
        onReset: resetCount
    }
}