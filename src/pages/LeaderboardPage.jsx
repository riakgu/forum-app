import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetLeaderboards } from "../states/leaderboards/action";
import LeaderboardList from "../components/LeaderboardList";

function LeaderboardPage() {
  const dispatch = useDispatch();

  const leaderboards = useSelector((state) => state.leaderboards);

  useEffect(() => {
    dispatch(asyncGetLeaderboards());
  }, []);

  return (
    <section className="leaderboard">
      <div className="leaderboard-page">
        <h2>Active Users</h2>
        <LeaderboardList leaderboards={leaderboards} />
      </div>
    </section>
  );
}

export default LeaderboardPage;
