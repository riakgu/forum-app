import {FaRegThumbsDown, FaRegThumbsUp, FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import React from "react";
import {useBodyInput} from "../hooks/useInput";
import {useDispatch, useSelector} from "react-redux";
import {asyncCreateComment} from "../states/detailThread/action";
import {Link} from "react-router-dom";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";


function Comment({threadId,comments}) {
    const dispatch = useDispatch();

    const onCreateComment = async ({ content }) => {
        await dispatch(asyncCreateComment({ threadId, content }));
    };

    return (
        <div className="thread-comment">
            <CommentInput createComment={onCreateComment}/>
            <CommentList comments={comments}/>
        </div>
    );
}

export default Comment;
