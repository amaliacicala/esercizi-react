import { useGithubUser } from './hooks/useGithubUser'

export function GithubUser({ username = 'amaliacicala' }) {
    const { data } = useGithubUser(username)
    
    return (
        data &&
        <div style={{border: 'solid 1px black', padding: '1rem', marginTop: '1rem'}}>
            <h3>Github username: {data.login}</h3>
            <h3>Public repositories: {data.public_repos}</h3>
            <h3>Followers: {data.followers}</h3>
        </div>
    )
}