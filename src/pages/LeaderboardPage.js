import LeaderboardItem from "../components/LeaderboardItem";


function LeaderboardPage() {
    return (
        <>
            <section className="leaderboard">
                <div className="leaderboard-page">
                    <h2>Active Users</h2>
                    <div className="leaderboards-list">
                        <header>
                            <p className="leaderboards-list__user-label">User</p>
                            <p className="leaderboards-list__score-label">Score</p>
                        </header>
                        <LeaderboardItem/>
                        <LeaderboardItem/>
                        <LeaderboardItem/>
                        <LeaderboardItem/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LeaderboardPage;
