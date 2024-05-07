import React from "react";
import RegisterPageInput from "../components/RegisterPageInput";
import {Link, useNavigate} from "react-router-dom";


function RegisterPage() {

    return (
        <section className={"regsiter-page"}>
            <h2>Fill out the form to register for an account.</h2>
            <RegisterPageInput />
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </section>
    );
}

export default RegisterPage;
