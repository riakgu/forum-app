import React, { useState } from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterPageInput({ register }) {
    const [name, setName] = useInput('');
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');

    return (
        <form className="input-register" >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={setName}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={setEmail}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"  value={password} onChange={setPassword}/>
            <button type="button" onClick={() => register({ name, email, password })}>Register</button>
        </form>
    );
};

RegisterPageInput.propTypes = {
    register: PropTypes.func.isRequired,
};


export default RegisterPageInput;
