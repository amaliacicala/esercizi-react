import { useState, useEffect } from "react"

export function useGithubUser(username) {
    const [data, setData] = useState()
    
    useEffect(() => {
        
        const fetchData = async () => {
            const data = await fetch(`https://api.github.com/users/${username}`)
            const json = await data.json()
            setData(json)
        }

        fetchData().catch(console.error)
    }, [])

    return { data }
}