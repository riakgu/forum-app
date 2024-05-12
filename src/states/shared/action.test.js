/**
 * Test Scenario
 *
 * - asyncPopulateUsersAndThreads thunk
 *   - should dispatch actions correctly when fetching is successful
 *   - should handle errors and dispatch appropriate actions when fetching fails
 */

import {
  describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import api from '../../utils/api';
import { asyncPopulateUsersAndThreads } from './action';
import { getAllThreadsActionCreator } from '../threads/action';
import { getAllUsersActionCreator } from '../users/action';

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    // Mocking the API methods and toast
    vi.mock('../../utils/api');
    vi.mock('react-hot-toast');
    api.getAllUsers = vi.fn();
    api.getAllThreads = vi.fn();
    toast.error = vi.fn();
  });

  afterEach(() => {
    // Reset mocks after each test
    vi.resetAllMocks();
  });

  it('should dispatch actions correctly when fetching is successful', async () => {
    // Arrange
    const fakeUsers = [{ id: 'user-1', name: 'John Doe' }];
    const fakeThreads = [{ id: 'thread-1', title: 'Thread One' }];
    api.getAllUsers.mockResolvedValue(fakeUsers);
    api.getAllThreads.mockResolvedValue(fakeThreads);
    const dispatch = vi.fn();

    // Act
    await asyncPopulateUsersAndThreads()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(getAllUsersActionCreator(fakeUsers));
    expect(dispatch).toHaveBeenCalledWith(getAllThreadsActionCreator(fakeThreads));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should handle errors and dispatch appropriate actions when fetching fails', async () => {
    // Arrange
    const error = new Error('Failed to fetch data');
    api.getAllUsers.mockRejectedValue(error);
    api.getAllThreads.mockRejectedValue(error); // Assume both calls fail for simplicity
    const dispatch = vi.fn();

    // Act
    await asyncPopulateUsersAndThreads()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.error).toHaveBeenCalledWith(error.message);
  });
});
