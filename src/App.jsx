import React, { useEffect } from 'react';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
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
import Navbar from "./components/Navbar";
import LoadingBar from 'react-redux-loading-bar';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authUser = useSelector(state => state.authUser);
  const isPreload = useSelector(state => state.isPreload);

  const onLogout = () => {
    dispatch(asyncLogout()).then(({ status }) => {
      if (status === 'success') navigate('/');
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
      <header>
        <h1>Forum App</h1>
        <Navbar logout={onLogout} authUser={authUser} />
      </header>
      <LoadingBar style={{ backgroundColor: '#27374D' }}/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={!!authUser ? <Navigate to="/" /> : <LoginPage />}/>
          <Route path="/register" element={!!authUser ? <Navigate to="/" /> : <RegisterPage />}/>
          <Route path="/thread/:id" element={<ThreadPage/>}/>
          <Route path="/thread/create" element={<ThreadAddPage/>}/>
          <Route path="/leaderboard" element={<LeaderboardPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
