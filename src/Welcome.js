import React from "react";
import { useNavigate } from "react-router-dom";

export function Welcome({ name }) {
    const navigate = useNavigate();

    function handleCounterBtnClick() {
        navigate('/counter')
    }

    return (
        <div>
            <h1>Welcome, {name}!</h1>
            {/* <Link to="/counter">Access counter</Link> */}
            <button 
                style={{backgroundColor:'dodgerblue', padding:'0.5rem 1rem', border:'none', fontSize:'1rem', cursor:'pointer'}}
                onClick={handleCounterBtnClick}
            >Access counter</button>
        </div>
    )
}