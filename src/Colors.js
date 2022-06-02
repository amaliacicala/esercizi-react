import React from "react";

export class Colors extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.colors.map((name, id) => (
                        <li key={id}>{name}</li>
                    ))}
                    </ul>
            </div>
        )
    }
}