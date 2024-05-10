import React, { useEffect } from "react";
import { Navigate, useNavigate, useRoutes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ThreadPage from "./pages/ThreadPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import ThreadAddPage from "./pages/ThreadAddPage";
import { asyncLogout } from "./states/authUser/action";
import { asyncIsPreload } from "./states/isPreload/action";
import Navigation from "./components/Navigation";
import LoadingBar from "react-redux-loading-bar";

const ROUTE_PATHS = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  THREAD: '/thread/:id',
  THREAD_CREATE: '/thread/create',
  LEADERBOARD: '/leaderboard'
};

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authUser = useSelector((state) => state.authUser);
  const isPreload = useSelector((state) => state.isPreload);

  const onLogout = () => {
    dispatch(asyncLogout()).then(({ status }) => {
      if (status === "success") navigate(ROUTE_PATHS.HOME);
      toast.success("Logout successfully!")
    });
  };

  useEffect(() => {
    dispatch(asyncIsPreload());
  }, []);

  const routes = useRoutes([
    { path: ROUTE_PATHS.HOME, element: <HomePage /> },
    { path: ROUTE_PATHS.LOGIN, element: authUser ? <Navigate to={ROUTE_PATHS.HOME} /> : <LoginPage /> },
    { path: ROUTE_PATHS.REGISTER, element: authUser ? <Navigate to={ROUTE_PATHS.HOME} /> : <RegisterPage /> },
    { path: ROUTE_PATHS.THREAD, element: <ThreadPage /> },
    { path: ROUTE_PATHS.THREAD_CREATE, element: <ThreadAddPage /> },
    { path: ROUTE_PATHS.LEADERBOARD, element: <LeaderboardPage /> }
  ]);

  if (isPreload) {
    return null;
  }

  return (
      <div className="app-container">
        <Toaster />
        <header>
          <h1>Forum App</h1>
          <Navigation logout={onLogout} authUser={authUser} />
        </header>
        <LoadingBar style={{ backgroundColor: "#27374D" }} />
        <main>
          {routes}
        </main>
      </div>
  );
}

export default App;
