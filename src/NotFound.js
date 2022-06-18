import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();

    function handleBackBtnClick() {
        navigate('/')
    }

    return (
        <div>
            <h1>404</h1>
            <h3>Not Found</h3>
            <img src="https://c.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif" height="300" />
            <br />
            <button className="nav-btn" onClick={handleBackBtnClick}>Go back</button>
        </div>
    )
}