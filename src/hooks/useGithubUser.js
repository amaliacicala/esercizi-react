import { useState } from "react"

export function useGithubUser(username) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    async function fetchData(username) {
        setLoading(true)
        setError(null)

        try {
            const data = await fetch(`https://api.github.com/users/${username}`)
            const json = await data.json()
            setData(json)
        } catch (error) {
            setError(error)
            setData(null)
        } finally {
            setLoading(false)
        }
    }

    // useEffect(() => {
    //     fetchData(username)
    // }, [username])

    return { data, loading, error, onFetchData: fetchData }
}