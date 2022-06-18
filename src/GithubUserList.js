// import { useNavigate } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";

export function GithubUserList() {
    const navigate = useNavigate();

    function handleShowGithubBtnClick() {
        navigate(':username')
    }

    return (
        <div>
            <h2>Github User List</h2>
            <button className="nav-btn" onClick={handleShowGithubBtnClick}>Show Github User</button>
            <Outlet />
        </div>

    )
}