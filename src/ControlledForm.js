import React from "react";
import { useForm } from "./hooks/useForm";

export function ControlledForm() {
    const { username, password, onUsernameChange, onPasswordChange } = useForm()

    return (
        <fieldset>
            <legend><h3>Controlled Form</h3></legend>
            <h4>Username: {username}</h4>
            <h4>Password: {password}</h4>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    name="username"
                    type="text"
                    value={username}
                    onChange={onUsernameChange}
                />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={onPasswordChange}
                />
            </div>

            <div>
                <button disabled>
                    Login
                </button>
            </div>
        </fieldset>
    )
}
