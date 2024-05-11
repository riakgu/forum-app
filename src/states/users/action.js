import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import api from '../../utils/api';

const ActionType = {
  REGISTER_USER: 'users/register',
  GET_ALL_USERS: 'users/fetchAll',
};

function registerUserActionCreator(user) {
  return {
    type: ActionType.REGISTER_USER,
    payload: {
      user,
    },
  };
}

function getAllUsersActionCreator(users) {
  return {
    type: ActionType.GET_ALL_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const user = await api.registerUser({ name, email, password });
      dispatch(registerUserActionCreator(user));
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
  registerUserActionCreator,
  getAllUsersActionCreator,
  asyncRegisterUser,
};
