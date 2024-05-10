import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ThreadPage from './pages/ThreadPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ThreadAddPage from './pages/ThreadAddPage';
import { asyncLogout } from './states/authUser/action';
import { asyncIsPreload } from './states/isPreload/action';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { authUser, isPreload } = useSelector((state) => state);

  const onLogout = () => {
    dispatch(asyncLogout()).then(({ status }) => {
      if (status === 'success') navigate('/login');
    });
  };

  useEffect(() => {
    dispatch(asyncIsPreload());
  }, []);

  if (isPreload) {
    return null;
  }

  return (
    <div className="app-container">
      <Toaster />
      <Header authUser={authUser} logout={onLogout} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/thread/:id" element={<ThreadPage />} />
          <Route path="/thread/new" element={<ThreadAddPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
