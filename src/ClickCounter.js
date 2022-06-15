import { useCounter } from './hooks/useCounter'

export function ClickCounter({ initialValue = 0 }) {
    const { counter, onIncrement, onDecrement, onReset } = useCounter(initialValue)

    return (
        <div>
            <h3>Count: {counter}</h3>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}