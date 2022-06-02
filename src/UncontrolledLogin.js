import React from "react";

export class UncontrolledLogin extends React.Component {
    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }

    render() {
        return (
            <fieldset>
                <legend>
                    <h3>Uncontrolled Login</h3>
                </legend>

                <form onSubmit={this.handleFormSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            name="username"
                            type="text"
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            name="password"
                            type="password"
                        />
                    </div>

                    <div>
                        <label htmlFor="remember">Remember?</label>
                        <input
                            name="remember"
                            type="checkbox"
                        />
                    </div>

                    <div>
                        <button type="reset">Reset</button>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </fieldset>
        )
    }
}