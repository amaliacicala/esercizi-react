import { useState, useEffect } from 'react'

export function GithubUser({ username }) {
    const [data, setData] = useState()
    
    useEffect(() => {
        
        const fetchData = async () => {
            const data = await fetch(`https://api.github.com/users/${username}`)
            const json = await data.json()
            setData(json)
        }

        fetchData().catch(console.error)
    }, [])

    return (
        data &&
        <div style={{border: 'solid 1px black', padding: '1rem', marginTop: '1rem'}}>
            <h3>Github username: {data.login}</h3>
            <h3>Public repositories: {data.public_repos}</h3>
            <h3>Followers: {data.followers}</h3>
        </div>
    )
}