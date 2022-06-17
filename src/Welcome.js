import React from "react";
import { Link } from "react-router-dom";

export class Welcome extends React.Component {
    render() {
        return (
        <div>
            <h1>Welcome, {this.props.name}!</h1>
            <Link to="/counter">Access counter</Link>
         </div>
        )
    }
}