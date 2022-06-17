import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Route, Routes, Link } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
    return (
    <>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/users:username">Github User</Link></li>
            </ul>
        </div>

        <Routes>
            <Route path="/" element={<Welcome name={<em>earthling</em>} />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="users:username" element={<ShowGithubUser />} />
        </Routes>
    </>
    )
}