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

    render() {
        return (
            <div>
                <div>
                    {this.props.render(this.state.items)}
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