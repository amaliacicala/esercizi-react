import React from "react";
// import { Login } from "./Login";
// import { Counter } from "./Counter";
// import { useState } from 'react';
import { ClickCounter } from "./ClickCounter";
// import { GithubUser } from "./GithubUser";
// import { GithubUserList } from "./GithubUserList";

export function App() {
    // const [showCounter, setShowCounter] = useState(true)

    // function toggleCounter() {
    //     setShowCounter(show => !show)
    // }

    return (
        <div>
            {/* <GithubUserList />
            <GithubUser />
            <button onClick={toggleCounter}>Unmount Counter</button>
            {showCounter && <Counter />}
            <Login /> */}
            <ClickCounter />
        </div>
    )
}