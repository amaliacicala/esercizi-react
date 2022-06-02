import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: ''
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const type = event.target.type
        const value = event.target.value
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
    }

    render() {
        return (
            <fieldset>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="remember">Remember?</label>
                    <input
                        name="remember"
                        type="checkbox"
                        checked={this.state.remember}
                        onChange={this.handleInputChange}
                    />
                </div>
            </fieldset>
        )
    }
}