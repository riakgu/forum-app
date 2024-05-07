import React from "react";

function LoginPageInput() {

    return (
        <form className="input-login">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <button type="button">Login</button>
        </form>
    );
}

export default LoginPageInput;
