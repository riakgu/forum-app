import {Link} from "react-router-dom";
import React from "react";


function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link className={"toggle-theme"} to="/">Home</Link>
                </li>
                <li>
                    <Link className={"toggle-theme"} to="/leaderboard">Leaderboard</Link>
                </li>
                <li>
                    <Link className={"toggle-theme"} to="/login">Login</Link>
                </li>
                <li>
                    <Link className={"toggle-theme"} to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    );
}


export default Navigation;
