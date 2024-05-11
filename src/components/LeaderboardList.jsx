import React from "react";
import PropTypes from "prop-types";
import LeaderboardItem from "./LeaderboardItem";

function LeaderboardList({ leaderboards }) {
  return (
    <div className="leaderboards-list">
      <header>
        <p className="leaderboards-list__user-label">User</p>
        <p className="leaderboards-list__score-label">Score</p>
      </header>
      {leaderboards.map((leaderboard) => (
        <LeaderboardItem
          key={leaderboard.user.id}
          {...leaderboard.user}
          score={leaderboard.score}
        />
      ))}
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
      score: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default LeaderboardList;
