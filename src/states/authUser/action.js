import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import api from '../../utils/api';

const ActionType = {
  LOGIN: 'authUser/set',
  LOGOUT: 'authUser/clear',
};

function loginActionCreator(authUser) {
  return {
    type: ActionType.LOGIN,
    payload: {
      authUser,
    },
  };
}

function logoutActionCreator() {
  return {
    type: ActionType.LOGOUT,
  };
}

function asyncLogin({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const user = await api.getOwnProfile();
      dispatch(loginActionCreator(user));
      return { status: 'success' };
    } catch (error) {
      toast.error(error.message);
      return { status: 'error' };
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncLogout() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(logoutActionCreator());
      api.putAccessToken('');
      return { status: 'success' };
    } catch (error) {
      toast.error(error.message);
      return { status: 'error' };
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  loginActionCreator,
  logoutActionCreator,
  asyncLogin,
  asyncLogout,
};
