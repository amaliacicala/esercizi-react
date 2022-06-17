import { useState, useRef, useEffect } from 'react'

export function Welcome() {
    const [name, setName] = useState('Amalia')
    const [surname, setSurname] = useState('Cicala')
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleSurnameChange(event) {
        setSurname(event.target.value)
    }

    return(
        <div>
            <h1>Hello, {name} {surname}!</h1>
            <input ref={inputRef} value={name} onChange={handleNameChange}/>
            <input ref={inputRef} value={surname} onChange={handleSurnameChange}/>
        </div>
    )
} 