import React from "react";
import PropTypes from "prop-types";
import CommentItem from "./CommentItem";

function CommentList({ threadId, comments }) {
  return (
    <div className="thread-comment__list">
      <h3>{`Comments (${comments.length})`}</h3>
      <div className="comments-list">
        {comments.map((comment) => (
          <CommentItem key={comment.id} threadId={threadId} {...comment} />
        ))}
      </div>
    </div>
  );
}

CommentList.propTypes = {
  threadId: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
      downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CommentList;
