/**
 * Test Scenario
 *
 * - asyncLogin thunk
 *   - should dispatch actions correctly and return success when login is successful
 *   - should handle errors and dispatch appropriate actions when login fails
 *
 * - asyncLogout thunk
 *   - should dispatch actions correctly and return success when logout is successful
 */

import {
  describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import api from '../../utils/api';
import {
  asyncLogin, asyncLogout, loginActionCreator, logoutActionCreator,
} from './action';

describe('Authentication Thunks', () => {
  beforeEach(() => {
    // Mocking the API method and toast
    vi.mock('../../utils/api');
    vi.mock('react-hot-toast');
    api.login = vi.fn();
    api.putAccessToken = vi.fn();
    api.getOwnProfile = vi.fn();
    toast.error = vi.fn();
  });

  afterEach(() => {
    // Reset mocks after each test
    vi.resetAllMocks();
  });

  describe('asyncLogin', () => {
    it('should dispatch actions correctly and return success when login is successful', async () => {
      const fakeUser = { id: 'user-1', name: 'John Doe' };
      const token = 'valid-token';
      api.login.mockResolvedValue(token);
      api.getOwnProfile.mockResolvedValue(fakeUser);
      const dispatch = vi.fn();

      const result = await asyncLogin({ email: 'john@example.com', password: 'password' })(dispatch);

      expect(dispatch).toHaveBeenCalledWith(showLoading());
      expect(api.putAccessToken).toHaveBeenCalledWith(token);
      expect(dispatch).toHaveBeenCalledWith(loginActionCreator(fakeUser));
      expect(dispatch).toHaveBeenCalledWith(hideLoading());
      expect(result).toEqual({ status: 'success' });
    });

    it('should handle errors and dispatch appropriate actions when login fails', async () => {
      const error = new Error('Login failed');
      api.login.mockRejectedValue(error);
      const dispatch = vi.fn();

      const result = await asyncLogin({ email: 'john@example.com', password: 'password' })(dispatch);

      expect(dispatch).toHaveBeenCalledWith(showLoading());
      expect(dispatch).toHaveBeenCalledWith(hideLoading());
      expect(toast.error).toHaveBeenCalledWith(error.message);
      expect(result).toEqual({ status: 'error' });
    });
  });

  describe('asyncLogout', () => {
    it('should dispatch actions correctly and return success when logout is successful', async () => {
      const dispatch = vi.fn();

      const result = await asyncLogout()(dispatch);

      expect(dispatch).toHaveBeenCalledWith(showLoading());
      expect(dispatch).toHaveBeenCalledWith(logoutActionCreator());
      expect(api.putAccessToken).toHaveBeenCalledWith('');
      expect(dispatch).toHaveBeenCalledWith(hideLoading());
      expect(result).toEqual({ status: 'success' });
    });
  });
});
