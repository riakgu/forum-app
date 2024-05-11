import React from "react";
import PropTypes from "prop-types";

function LeaderboardItem({ id, avatar, name, score }) {
  return (
    <div className="leaderboard-item" key={id}>
      <div className="leaderboard-item__user-info">
        <img src={avatar} alt={name} />
        <p>{name}</p>
      </div>
      <p className="leaderboard-item__score">{score}</p>
    </div>
  );
}

LeaderboardItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
