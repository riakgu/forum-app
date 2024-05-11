import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { asyncCreateComment } from "../states/threadDetail/action";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

function ThreadComment({ threadId, comments }) {
  const dispatch = useDispatch();

  const onCreateComment = async ({ content }) => {
    await dispatch(asyncCreateComment({ threadId, content }));
  };

  return (
    <div className="thread-comment">
      <CommentInput createComment={onCreateComment} />
      <CommentList threadId={threadId} comments={comments} />
    </div>
  );
}

ThreadComment.propTypes = {
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

export default ThreadComment;
