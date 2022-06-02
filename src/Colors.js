import React from "react";

export class Colors extends React.Component {
    render() {
        const items = this.props.colors.map((color) => <li>{color}</li>)

        return (
            <div>
                <ul>{items}</ul>
            </div>
        )
    }
}