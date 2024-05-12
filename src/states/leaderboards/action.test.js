/**
 * Test Scenario
 *
 * - asyncGetLeaderboards thunk
 *   - should dispatch actions correctly and return success when fetching leaderboards is successful
 *   - should handle errors correctly, dispatch actions, and return error status when fetching fails
 *   - should handle errors correctly, dispatch actions, and return error status when fetching fails
 */

import {
  describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import toast from 'react-hot-toast';
import api from '../../utils/api';
import { asyncGetLeaderboards, getLeaderboardsActionCreator } from './action';

describe('asyncGetLeaderboards thunk', () => {
  beforeEach(() => {
    // Mocking the API method and toast
    vi.mock('../../utils/api');
    vi.mock('react-hot-toast');
    api.getLeaderboards = vi.fn();
    toast.error = vi.fn();
  });

  afterEach(() => {
    // Reset mocks after each test
    vi.resetAllMocks();
  });

  it('should dispatch actions correctly and return success when fetching leaderboards is successful', async () => {
    // Arrange
    const fakeLeaderboards = [{ id: '1', score: 100 }];
    api.getLeaderboards.mockResolvedValue(fakeLeaderboards);
    const dispatch = vi.fn();

    // Act
    const result = await asyncGetLeaderboards()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(getLeaderboardsActionCreator(fakeLeaderboards));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(result).toEqual({ status: 'success' });
  });

  it('should handle errors correctly, dispatch actions, and return error status when fetching fails', async () => {
    // Arrange
    const error = new Error('Failed to fetch leaderboards');
    api.getLeaderboards.mockRejectedValue(error);
    const dispatch = vi.fn();

    // Act
    const result = await asyncGetLeaderboards()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.error).toHaveBeenCalledWith(error.message);
    expect(result).toEqual({ status: 'error' });
  });
});
