import React from "react";

export class Colors extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.colors.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                    </ul>
            </div>
        )
    }
}