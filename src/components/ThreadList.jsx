import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import ThreadItem from "./ThreadItem";

function ThreadList({ threads }) {
  const users = useSelector((state) => state.users);

  return (
    <section className="threads-list">
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          owner={users.find((user) => user.id === thread.ownerId)}
          {...thread}
        />
      ))}
    </section>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      ownerId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string,
      createdAt: PropTypes.string.isRequired,
      totalComments: PropTypes.number.isRequired,
      upVotesBy: PropTypes.arrayOf(PropTypes.string),
      downVotesBy: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default ThreadList;
