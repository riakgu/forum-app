import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import detailThreadReducer from './threadDetail/reducer';
import leaderboardsReducer from './leaderboards/reducer';

const store = configureStore({
  reducer: {
    isPreload: isPreloadReducer,
    loadingBar: loadingBarReducer,
    authUser: authUserReducer,
    users: usersReducer,
    threads: threadsReducer,
    detailThread: detailThreadReducer,
    leaderboards: leaderboardsReducer,
  },
});

export default store;
