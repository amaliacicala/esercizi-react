import React from "react";

export class ClickCounter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    incrementCount = () => {
        this.setState(state => {
            return {
                count: state.count + this.props.incrementAmount
            }
        })
    }

    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
}

ClickCounter.defaultProps = {
    initialValue: 0,
    incrementAmount: 1,
}