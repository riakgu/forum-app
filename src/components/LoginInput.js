import React from "react";
import PropTypes from 'prop-types';
import useInput from "../hooks/useInput";

function LoginPageInput({login}) {
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');

    return (
        <form className="input-login">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={setEmail}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={setPassword}/>
            <button type="button" onClick={() => login({ email, password })}>Login</button>
        </form>
    );
}

LoginPageInput.propTypes = {
    login: PropTypes.func.isRequired
}
export default LoginPageInput;
