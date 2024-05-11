import React from "react";
import PropTypes from "prop-types";
import postedAt from "../utils/postedAt";
import { asyncToggleVoteDetailThread } from "../states/threadDetail/action";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";

function ThreadDetail({
  id,
  category,
  title,
  body,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
}) {
  const dispatch = useDispatch();

  const authUser = useSelector((state) => state.authUser);

  const onToggleVoteDetailThread = (voteType) => {
    if (!authUser) {
      toast("Please login first");
      return null;
    }
    dispatch(
      asyncToggleVoteDetailThread({
        threadId: id,
        voteType,
        userId: authUser.id,
      }),
    );
  };

  return (
    <div className={"thread-detail"} key={id}>
      <div className="thread-content">
        <h2>{title}</h2>
        <p className="thread-item__createdBy">
          Created By <img src={owner.avatar} alt={owner.name} /> {owner.name}{" "}
          {postedAt(createdAt)}
        </p>

        <button type={"button"} className={"category-item selected"}>
          {`#${category}`}
        </button>

        <div className="thread-content__body">
          <p dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>

      <div className="thread-item__footer">
        <div className="thread-item__like">
          <button
            className="thread-upvote__button"
            type="button"
            onClick={() =>
              onToggleVoteDetailThread(upVotesBy.includes(authUser?.id) ? 0 : 1)
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
              onToggleVoteDetailThread(
                downVotesBy.includes(authUser?.id) ? 0 : -1,
              )
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
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThreadDetail;
