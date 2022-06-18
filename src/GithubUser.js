import { useGithubUser } from "./hooks/useGithubUser"

export function GithubUser({ username }) {
    const { data, error, isLoading } = useGithubUser(username)

    return (
        <div style={{marginTop:'2rem'}}>            
            {!!isLoading && <h3>Loading...</h3>} {/* ho aggiunto `!!` perché ritornava uno 0 sulla pagina */}
            {error && <h3>Error</h3>}
            {data &&
                <div style={{border: 'solid 1px black', padding: '1rem', marginTop: '1rem'}}>
                    <h3>Github username: {data.login}</h3>
                    <h3>Public repositories: {data.public_repos}</h3>
                    <h3>Followers: {data.followers}</h3>
                </div>
            }
        </div>
    )
}