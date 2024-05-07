import {FaRegThumbsDown, FaRegThumbsUp, FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import React from "react";


function ThreadComment() {
    return (
        <div className="thread-comment">
            <div className="thread-comment__input">
                <h3>Leave a comment</h3>
                <form className="comment-input">
                    <div className="comment-input__field" contentEditable="true"></div>
                    <button type="button">Submit</button>
                </form>
            </div>
            <div className="thread-comment__list">
                <h3>Comment (1)</h3>
                <div className="comments-list">
                    <div className="comment-item">
                        <div className="comment-item__header">
                            <div className="comment-item__owner-info">
                                <img src="https://ui-avatars.com/api/?name=Dimas Saputra&amp;background=random"
                                     alt="Dimas Saputra"/><p>Dimas Saputra</p>
                            </div>
                            <p className="posted-at">344 hari lalu</p>
                        </div>
                        <p>Halo!<br/>Perkanalkan, nama saya Dimas.</p>
                        <footer>
                            <button type="button" className="comment-upvote__button">
                                <FaThumbsUp/>
                                <span className="comment-upvote__label">0</span>
                            </button>
                            <button type="button" className="comment-downvote__button">
                                <FaThumbsDown/>
                                <span className="comment-downvote__label">0</span>
                            </button>
                        </footer>
                    </div>
                    <div className="comment-item">
                        <div className="comment-item__header">
                            <div className="comment-item__owner-info">
                                <img src="https://ui-avatars.com/api/?name=Dimas Saputra&amp;background=random"
                                     alt="Dimas Saputra"/><p>Dimas Saputra</p>
                            </div>
                            <p className="posted-at">344 hari lalu</p>
                        </div>
                        <p>Halo!<br/>Perkanalkan, nama saya Dimas.</p>
                        <footer>
                            <button type="button" className="comment-upvote__button">
                                <FaThumbsUp/>
                                <span className="comment-upvote__label">0</span>
                            </button>
                            <button type="button" className="comment-downvote__button">
                                <FaThumbsDown/>
                                <span className="comment-downvote__label">0</span>
                            </button>
                        </footer>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ThreadComment;
