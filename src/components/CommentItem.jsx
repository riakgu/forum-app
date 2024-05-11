import React from "react";
import {
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { asyncToggleVoteCommentThread } from "../states/threadDetail/action";
import postedAt from "../utils/postedAt";

function CommentItem({
  threadId,
  id,
  owner,
  content,
  upVotesBy,
  downVotesBy,
  createdAt,
}) {
  const authUser = useSelector((state) => state.authUser);
  const dispatch = useDispatch();

  const onToggleVoteComment = (voteType, commentId) => {
    if (!authUser) {
      toast("Please login first");
      return;
    }
    dispatch(
      asyncToggleVoteCommentThread({
        threadId,
        voteType,
        userId: authUser.id,
        commentId,
      }),
    );
  };

  return (
    <div className="comment-item">
      <div className="comment-item__header">
        <div className="comment-item__owner-info">
          <img src={owner.avatar} alt={owner.name} />
          <p>{owner.name}</p>
        </div>
        <p className="posted-at">{postedAt(createdAt)}</p>
      </div>
      <p dangerouslySetInnerHTML={{ __html: content }} />
      <footer>
        <button
          type="button"
          aria-label="Upvote"
          className="comment-upvote__button"
          onClick={() =>
            onToggleVoteComment(upVotesBy.includes(authUser?.id) ? 0 : 1, id)
          }
        >
          {upVotesBy.includes(authUser?.id) ? (
            <FaThumbsUp />
          ) : (
            <FaRegThumbsUp />
          )}
          <span className="comment-upvote__label">{upVotesBy.length}</span>
        </button>
        <button
          type="button"
          aria-label="Downvote"
          className="comment-downvote__button"
          onClick={() =>
            onToggleVoteComment(upVotesBy.includes(authUser?.id) ? 0 : -1, id)
          }
        >
          {downVotesBy.includes(authUser?.id) ? (
            <FaThumbsDown />
          ) : (
            <FaRegThumbsDown />
          )}
          <span className="comment-downvote__label">{downVotesBy.length}</span>
        </button>
      </footer>
    </div>
  );
}

CommentItem.propTypes = {
  threadId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default CommentItem;
