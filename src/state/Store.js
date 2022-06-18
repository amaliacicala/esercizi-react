import { createStore } from "redux";
import { counterReducer, incrementCount, resetCount } from "./CounterState";

export const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(resetCount())
store.dispatch(incrementCount(5))
store.dispatch(incrementCount(2))
store.dispatch(incrementCount(3))
