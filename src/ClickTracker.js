import React from "react";

export class ClickTracker extends React.Component {
    state = {
        name: undefined
    }

    handleButtonClick = (event) => {
        this.setState(() => {
            return {
                name: event.target.name
            }
        })
        
        console.log(event.target.name)
    }

    render() {
        return (
            <div>
                <h1>Last button you clicked on: {this.state.name}</h1>

                <button name="A" onClick={this.handleButtonClick}>Button A</button>
                <button name="B" onClick={this.handleButtonClick}>Button B</button>
                <button name="C" onClick={this.handleButtonClick}>Button C</button>
            </div>
        )
    }
}