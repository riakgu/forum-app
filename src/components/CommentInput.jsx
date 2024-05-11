import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useBodyInput } from "../hooks/useInput";
import toast from "react-hot-toast";

function CommentInput({ createComment }) {
  const [content, setContent, resetContent, refContent] = useBodyInput("");

  const authUser = useSelector((state) => state.authUser);

  const onFormSubmit = (event) => {
    event.preventDefault();
    createComment({ content });
    resetContent();
    toast.success("Comment has been added!")
  };

  return (
    <div className="thread-comment__input">
      <h3>Leave a comment</h3>
      {authUser ? (
        <form className="comment-input" onSubmit={onFormSubmit}>
          <div
            aria-label="Comment"
            ref={refContent}
            className="comment-input__field"
            contentEditable
            onInput={setContent}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p className="thread-comment__not_login">
          <Link to="/login">Login</Link> to leave a comment.
        </p>
      )}
    </div>
  );
}

CommentInput.propTypes = {
  createComment: PropTypes.func.isRequired,
};

export default CommentInput;
