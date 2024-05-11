import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import {
  FaComment,
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
import { asyncToggleVoteThread } from "../states/threads/action";
import postedAt from "../utils/postedAt";

function ThreadItem({
  owner,
  id,
  category,
  title,
  body,
  createdAt,
  totalComments,
  upVotesBy,
  downVotesBy,
}) {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);

  const onToggleVoteThread = (voteType) => {
    if (!authUser) {
      toast("Please login first");
      return;
    }
    dispatch(
      asyncToggleVoteThread({ threadId: id, voteType, userId: authUser.id }),
    );
  };

  return (
    <article className="thread-item">
      <h2 className="thread-item__title">
        <Link to={`/thread/${id}`}>{title}</Link>
      </h2>

      <p className="thread-item__createdBy">
        Created By <img src={owner.avatar} alt={owner.name} /> {owner.name}{" "}
        {postedAt(createdAt)}
      </p>

      <button
        type={"button"}
        className={"category-item selected"}
      >{`#${category}`}</button>

      <p
        className="thread-item__body"
        dangerouslySetInnerHTML={{ __html: body }}
      />

      <div className="thread-item__footer">
        <div className="thread-item__like">
          <button
            className="thread-upvote__button"
            type="button"
            onClick={() =>
              onToggleVoteThread(upVotesBy.includes(authUser?.id) ? 0 : 1)
            }
          >
            {upVotesBy.includes(authUser?.id) ? (
              <FaThumbsUp />
            ) : (
              <FaRegThumbsUp />
            )}
          </button>
          <span>{upVotesBy.length}</span>
        </div>
        <div className="thread-item__dislike">
          <button
            className="thread-downvote__button"
            type="button"
            onClick={() =>
              onToggleVoteThread(downVotesBy.includes(authUser?.id) ? 0 : -1)
            }
          >
            {downVotesBy.includes(authUser?.id) ? (
              <FaThumbsDown />
            ) : (
              <FaRegThumbsDown />
            )}
          </button>
          <span>{downVotesBy.length}</span>
        </div>
        <div className="thread-item__comments">
          <FaComment />
          <span>{totalComments}</span>
        </div>
      </div>
    </article>
  );
}

ThreadItem.propTypes = {
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThreadItem;
