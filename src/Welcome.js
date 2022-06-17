import React from "react";
import { useNavigate } from "react-router-dom";

export function Welcome({ name }) {
    const navigate = useNavigate();

    function handleCounterBtnClick() {
        navigate('/counter')
    }

    function handleGithubBtnClick() {
        navigate('/users:username')
    }

    return (
        <div>
            <h1>Welcome, {name}!</h1>
            {/* <Link to="/counter">Access counter</Link> */}
            <button className="nav-btn" onClick={handleCounterBtnClick}>Access counter</button>
            <button className="nav-btn" onClick={handleGithubBtnClick}>Show Github User</button>
        </div>
    )
}