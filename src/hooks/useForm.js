import { useState } from 'react'

export function useForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = event => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    return {
        username: username,
        password: password,
        onUsernameChange: handleUsernameChange,
        onPasswordChange: handlePasswordChange
    }
}