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

        console.log(this.state)
    }

    handleReset = () => {
        this.setState({
            items: []
        })
    }

    handleRemove = (index) => {
        let newItems = [...this.state.items]
        newItems.splice(index, 1)
        this.setState({
            items: newItems
        })
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        {this.state.items.map((item, index) => (
                            <li key={index}>{item}
                                <button type="button" onClick={this.handleRemove.bind(this, index)}>Remove</button>
                            </li>
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

                    <button
                        type="button"
                        onClick={this.handleReset}
                    >
                        Reset
                    </button>
                </form>
            </div>
        )
    }
}