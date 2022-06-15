import { useGithubUser } from './hooks/useGithubUser'

export function GithubUser({ username = 'amaliacicala' }) {
    const { data, loading, error, onFetchData } = useGithubUser(username)
    
    function fetchData() {
        onFetchData(username)
    }

    return (
        <div style={{marginTop:'2rem'}}>
            <button onClick={fetchData} style={{backgroundColor:'lightgreen',border:'none',padding:'0.5rem'}}>Load data</button>

            {loading && <h3>Loading...</h3>}
            {error && <h3>Error</h3>}
            {data &&
            <div style={{border: 'solid 1px black', padding: '1rem', marginTop: '1rem'}}>
                <h3>Github username: {data.login}</h3>
                <h3>Public repositories: {data.public_repos}</h3>
                <h3>Followers: {data.followers}</h3>
            </div>}
        </div>
    )
}