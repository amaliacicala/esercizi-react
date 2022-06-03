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

    handleInputChange = (event) => {
        const value = event.target.value 

        this.setState({
            item: value
        })
    }

    handleAddTask = (event) => {   
        const value = event.target.value 
       
        this.setState({
            item: value
        })

        this.state.items.push(this.state.item)
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        {this.state.items.map((todo, index) => (
                            <li key={index}>{todo}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <input 
                        name="newTask"
                        value={this.state.newTask}
                        onChange={this.handleInputChange}
                    />

                    <button 
                        onClick={this.handleAddTask}
                        disabled={!this.state.items}
                    >Add Task</button>
                </div>
            </div>
        )
    }
}