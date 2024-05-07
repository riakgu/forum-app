import React from "react";
import {Link} from "react-router-dom"
import LoginPageInput from "../components/LoginPageInput";


function LoginPage() {

    return (
        <section className={"login-page"}>
            <h2>Login to use the app.</h2>
            <LoginPageInput/>
            <p>Don\'t have an account yet? <Link to="/register">Register here</Link></p>
        </section>
    );
}


export default LoginPage;
