import { createStore } from "redux";
import { counterReducer, incrementCount, resetCount } from "./CounterState";
import { todosReducer, addTodo, removeTodo, editTodo } from "./TodosReducer";

// export const store = createStore(counterReducer)

// store.subscribe(() => {
//     console.log(store.getState())
// })

// store.dispatch(resetCount())
// store.dispatch(incrementCount(5))
// store.dispatch(incrementCount(2))
// store.dispatch(incrementCount(3))

export const store = createStore(todosReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addTodo(1, 'Have breakfast', false))
store.dispatch(addTodo(2, 'Study Redux', false))
store.dispatch(addTodo(3, 'Go to sleep', false))
store.dispatch(editTodo(1, 'Have breakfast', true))
store.dispatch(removeTodo(1))