import React from "react";

export class TodoList extends React.Component {
    state = {
        todos: [
            'Buy groceries',
            'Study React',
            'Feed the cat',
            'Watch Netflix',
        ]
    }

    handleInputChange = (event) => {
        this.setState({
            task: event.target.value
        })
    }

    handleAddTask = (event) => {    
        this.setState({
            task: event.target.value
        })

        this.state.todos.push(this.state.task)
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        {this.state.todos.map((todo, index) => (
                            <li key={index}>{todo}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <input 
                        name="newTask"
                        onChange={this.handleInputChange}
                    />

                    <button 
                        onClick={this.handleAddTask}
                        disabled={!this.state.task}
                    >Add Task</button>
                </div>
            </div>
        )
    }
}