import React from "react";

export class TodoList extends React.Component {
    state = {
        items: [
            'Buy groceries',
            'Study React',
            'Feed the cat',
            'Watch Netflix',
        ]
    }


    handleAddTask = (event) => {
        event.preventDefault()

        const value = event.target.elements.taskInput.value
        this.setState({
            item: value
        })

        this.state.items.push(value)
        event.target.elements.taskInput.value = ''
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        {this.state.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <form onSubmit={this.handleAddTask}>
                    <input 
                        name="taskInput"
                    />

                    <button 
                        type="submit"
                    >Add Task</button>
                </form>
            </div>
        )
    }
}