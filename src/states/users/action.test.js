/**
 * Test Scenario
 *
 * - asyncRegisterUser thunk
 *   - should dispatch actions correctly when registration is successful
 *   - should handle errors and dispatch appropriate actions when registration fails
 */

import {
  describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import api from '../../utils/api';
import { asyncRegisterUser, registerUserActionCreator } from './action';

describe('asyncRegisterUser thunk', () => {
  beforeEach(() => {
    // Mocking the API method and toast
    vi.mock('../../utils/api');
    vi.mock('react-hot-toast');
  });

  afterEach(() => {
    // Reset mocks after each test
    vi.resetAllMocks();
  });

  it('should dispatch actions correctly when registration is successful', async () => {
    // Arrange
    const fakeUser = { id: 'user-1', name: 'John Doe', email: 'john@example.com' };
    api.registerUser = vi.fn().mockResolvedValue(fakeUser);
    const dispatch = vi.fn();

    // Act
    const result = await asyncRegisterUser({ name: 'John Doe', email: 'john@example.com', password: 'password' })(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(registerUserActionCreator(fakeUser));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(result).toEqual({ status: 'success' });
  });

  it('should handle errors and dispatch appropriate actions when registration fails', async () => {
    // Arrange
    const error = new Error('Registration failed');
    api.registerUser = vi.fn().mockRejectedValue(error);
    const dispatch = vi.fn();
    toast.error = vi.fn(); // Mocking toast.error

    // Act
    const result = await asyncRegisterUser({ name: 'John Doe', email: 'john@example.com', password: 'password' })(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.error).toHaveBeenCalledWith(error.message);
    expect(result).toEqual({ status: 'error' });
  });
});
