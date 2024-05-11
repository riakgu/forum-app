import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import api from '../../utils/api';

const ActionType = {
  GET_LEADERBOARDS: 'leaderboards/fetch',
};

function getLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.GET_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncGetLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderboards();
      dispatch(getLeaderboardsActionCreator(leaderboards));
      return { status: 'success' };
    } catch (error) {
      toast.error(error.message);
      return { status: 'error' };
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { ActionType, getLeaderboardsActionCreator, asyncGetLeaderboards };
