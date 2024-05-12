/**
 * Test Scenario
 *
 * - asyncIsPreload thunk
 *   - should dispatch actions correctly when token is present and API call succeeds
 *   - should dispatch login with null and set isPreload to false when token is present but API call fails
 *   - should dispatch login with null and set isPreload to false when no token is present
 */

import {
  describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncIsPreload, isPreloadActionCreator } from './action';
import { loginActionCreator } from '../authUser/action';

describe('asyncIsPreload thunk', () => {
  beforeEach(() => {
    // Mock API and Redux dispatch
    vi.mock('../../utils/api');
    api.getAccessToken = vi.fn();
    api.getOwnProfile = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should dispatch actions correctly when token is present and API call succeeds', async () => {
    const fakeUser = { id: 'user-1', name: 'John Doe' };
    api.getAccessToken.mockReturnValue('valid-token');
    api.getOwnProfile.mockResolvedValue(fakeUser);
    const dispatch = vi.fn();

    await asyncIsPreload()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(loginActionCreator(fakeUser));
    expect(dispatch).toHaveBeenCalledWith(isPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch login with null and set isPreload to false when token is present but API call fails', async () => {
    api.getAccessToken.mockReturnValue('valid-token');
    api.getOwnProfile.mockRejectedValue(new Error('Failed to fetch profile'));
    const dispatch = vi.fn();

    await asyncIsPreload()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(loginActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(isPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch login with null and set isPreload to false when no token is present', async () => {
    api.getAccessToken.mockReturnValue(null);
    const dispatch = vi.fn();

    await asyncIsPreload()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(loginActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(isPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
