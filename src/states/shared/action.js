import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import api from '../../utils/api';
import { getAllThreadsActionCreator } from '../threads/action';
import { getAllUsersActionCreator } from '../users/action';

export default function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      dispatch(getAllThreadsActionCreator(threads));
      dispatch(getAllUsersActionCreator(users));
    } catch (error) {
      toast.error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { asyncPopulateUsersAndThreads };
