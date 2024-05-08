import ThreadInput from "../components/ThreadInput";
import React from "react";
import RegisterInput from "../components/RegisterInput";
import {Link, useNavigate} from "react-router-dom";
import {asyncCreateThread} from "../states/threads/action";
import {useDispatch} from "react-redux";


function AddPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onCreateThread = async ({ title, body, category }) => {
        await dispatch(asyncCreateThread({ title, body, category })).then(
            ({ status }) => {
                if (status === 'success') {
                    navigate('/');
                }
            },
        );
    };
    return (
        <section className={"regsiter-page"}>
            <h2>Create a new discussion.</h2>
            <ThreadInput createThread={onCreateThread}/>
        </section>
    );
}

export default AddPage;
