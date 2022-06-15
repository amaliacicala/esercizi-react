import { useState } from 'react'
import { GithubUser } from './GithubUser'

export function GithubUserList() {
    const [newUser, setNewUser] = useState('')
    const [userList, setUserList] = useState([])

    const onInputChange = event => {
        setNewUser(event.target.value)
    }

    const addUser = () => {
        setUserList(state => [...state, newUser])
    }

    return (
        <div>
            <input type="text" onChange={onInputChange}></input>
            <input type="submit" onClick={addUser} value="Add Github User"/>
            <div>
                {userList.map((user, index) => (
                    <GithubUser key={index} username={user}/>
                ))}
            </div>
        </div>
    )
}
