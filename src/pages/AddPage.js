import AddPageInput from "../components/AddPageInput";
import React from "react";
import RegisterPageInput from "../components/RegisterPageInput";
import {Link} from "react-router-dom";


function AddPage() {
    return (
        <section className={"regsiter-page"}>
            <h2>Create a new discussion.</h2>
            <AddPageInput/>
        </section>
    );
}

export default AddPage;
