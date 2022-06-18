import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { NotFound } from "./NotFound";
import { Counter } from "./Counter";
import { GithubUserList } from "./GithubUserList"
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
    return (
    <>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="counter">Counter</Link></li>
                <li><Link to="users">Github User</Link></li>
            </ul>
        </div>

        <Routes>
            <Route path="/" element={<Welcome name={<em>earthling</em>} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/users" element={<GithubUserList />}>
                <Route index element={<h3>Add a user and select it</h3>}/>
                <Route path=":username" element={<ShowGithubUser />} />
            </Route>
        </Routes>
    </>
    )
}