import React from "react";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
    return (
        <div className="welcomePage">
            <h1 className="title">Where's Waldo</h1>
            <NavLink to="/levels">Play Game</NavLink>
        </div>
    )
}

export default WelcomePage;