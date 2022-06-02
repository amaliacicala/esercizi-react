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

    onReset = (event) => {
        this.setState({
            username: '',
            password: '',
            remember: false
        })
    }

    onLogin = (event) => {
        this.setState({
            username: '',
            password: '',
            remember: ''
        })

        console.log(this.state)
    }

    render() {
        return (
            <fieldset>
                <legend><h3>Controlled Login</h3></legend>
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

                <div>
                    <button onClick={this.onReset}>
                        Reset
                    </button>

                    <button onClick={this.onLogin} disabled={!this.state.value && !this.state.remember === true}>
                        Login
                    </button>
                </div>
            </fieldset>
        )
    }
}