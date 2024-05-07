import React from "react";


function LeaderboardItem() {
    return (
        <div className="leaderboard-item">
            <div className="leaderboard-item__user-info">
                <img src="https://ui-avatars.com/api/?name=aa&amp;background=random" alt="aa"/>
                <p>aa </p>
            </div>
            <p className="leaderboard-item__score">75</p>
        </div>
    );
}

export default LeaderboardItem;
