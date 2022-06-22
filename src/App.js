import React from "react";
import { TodoList } from "./TodoList";

export class App extends React.Component {
    render() {
        return (
            <div>
                <TodoList 
                render={items => {
                    return (
                        <ul>
                        {items.map((item, index) => {
                            return <li key={index}>{item}
                                <button 
                                    type="button" 
                                    onClick={event => {event.target.parentElement.remove()}}
                                >Remove</button>
                            </li>
                        })}
                        </ul>
                    )
                }}/>
            </div>
        )
    }
}