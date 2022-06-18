import { combineReducers, createStore } from "redux";
import { counterReducer, incrementCount, resetCount } from "./CounterState";
import { todosReducer, addTodo, removeTodo, editTodo } from "./TodosReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer
})

export const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})

// counter dispatch actions
store.dispatch(resetCount())
store.dispatch(incrementCount(5))
store.dispatch(incrementCount(2))
store.dispatch(incrementCount(3))

// todos dispatch actions
store.dispatch(addTodo(1, 'Have breakfast', true))
store.dispatch(addTodo(2, 'Study Redux', false))
store.dispatch(addTodo(3, 'Go to sleep', false))
store.dispatch(editTodo(2, 'Study Redux', true))
store.dispatch(removeTodo(2))