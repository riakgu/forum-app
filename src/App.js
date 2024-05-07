import {Link, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import LeaderboardPage from "./pages/LeaderboardPage"
import AddPage from "./pages/AddPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    const authedUser = null;

  return (
      <div className="app-container">
        <header>
          <h1>
            <Link to="/">Forum App</Link>
          </h1>
            <Navigation/>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/thread/id" element={<DetailPage />} />
                <Route path="/thread/new" element={<AddPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage/>} />
                <Route path="/*" element={<NotFoundPage/>}/>
            </Routes>
        </main>
      </div>
  );
}

export default App;
