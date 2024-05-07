import React, { useState } from "react";

function RegisterPageInput({ register }) {


    return (
        <form className="input-register" >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password"  />
            <button type="button">Register</button>
        </form>
    );
};

export default RegisterPageInput;
