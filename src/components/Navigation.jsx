import { NavLink } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

function Navigation({ authUser, logout }) {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/leaderboard"}>Leaderboard</NavLink>
        </li>
        {authUser ? (
          <li>
            <a onClick={logout}>Logout</a>
          </li>
        ) : (
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.object,
  logout: PropTypes.func.isRequired,
};
export default Navigation;
