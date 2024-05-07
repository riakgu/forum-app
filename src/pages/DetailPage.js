import React from "react";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import ThreadComment from "../components/ThreadComment";


function DetailPage() {
    return (
        <section className="detail-page">
            <div className="thread-content">
                <h2>Bagaimana pengalamanmu belajar Redux?</h2>
                <div className="thread-content__body">
                    Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?
                </div>
            </div>
            <div className="thread-footer">
                <button type="button" className="thread-upvote__button">
                    <FaThumbsUp/>
                    <span className="thread-upvote__label">0</span>
                </button>
                <button type="button" className="thread-downvote__button">
                    <FaThumbsDown/>
                    <span className="thread-downvote__label">0</span>
                </button>
                <div className="owner-info">
                    <span>Created by</span>
                    <img src="https://ui-avatars.com/api/?name=Dimas Saputra&amp;background=random" alt="avatar"/>
                    <span> Dimas Saputra</span>
                </div>
                <p>344 days ago</p>
            </div>
            <ThreadComment/>

        </section>


    );
}

export default DetailPage;
