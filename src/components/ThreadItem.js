import {Link} from "react-router-dom";
import React from "react";
import {FaComment, FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import ThreadComment from "./ThreadComment";


function ThreadItem() {
    return (
        <article className="thread-item">
            <div className="thread-item__header">
                <div className="thread-item__avatar">
                    <img src="https://ui-avatars.com/api/?name=Dimas Saputra&amp;background=random" alt="avatar"/></div>
                <div>
                    <p className="thread-item__name">Dimas Saputra</p>
                    <p className="thread-item__createdAt">344 days ago</p>
                </div>
            </div>

            <h3 className="thread-item__title">
                <Link to={`/thread/id`}>
                    Bagaimana pengalamanmu belajar Redux?
                </Link>
            </h3>
            <p className="thread-item__body">
                Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?
            </p>

            <div className="thread-item__footer">
                <div className="thread-item__like">
                    <FaThumbsUp/>
                    <span>0</span>
                </div>
                <div className="thread-item__dislike">
                    <FaThumbsDown/>
                    <span>1</span>
                </div>
                <div className="thread-item__comments">
                    <FaComment/>
                    <span>0</span>
                </div>
            </div>
        </article>

    );
}

export default ThreadItem;
