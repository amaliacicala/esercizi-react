import { useState } from 'react';

export function Login() {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target

        setData(data => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function onReset(event) {
        setData(data => {
            return {
                username: '',
                password: '',
                remember: false
            }
        })
    }
    
    function onLogin(event) {
        setData(data => {
            return {
                username: '',
                password: '',
                remember: ''
            }
        })

        console.log(data)
    }
        
    return (
        <fieldset>
            <legend><h3>Login</h3></legend>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    name="username"
                    type="text"
                    value={data.username}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="remember">Remember?</label>
                <input
                    name="remember"
                    type="checkbox"
                    checked={data.remember}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <button onClick={onReset}>
                    Reset
                </button>

                <button onClick={onLogin}>
                    Login
                </button>
            </div>
        </fieldset>
    )
}