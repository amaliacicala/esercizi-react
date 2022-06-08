import React from "react";

// export class Welcome extends React.Component {
//     render() {
//         return (
//         <div className="welcome">
//             <p>Welcome, {this.props.name}!</p>
//          </div>
//         )
//     }
// }

export function Welcome(props) {
    return (
        <div className="welcome">
            <p>Welcome, {props.name}!</p>
        </div>
    )
}