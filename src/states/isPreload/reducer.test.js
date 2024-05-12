/**
 * Test Scenario
 *
 * - isPreloadReducer
 *   - should return the initial state when no action is provided
 *   - should handle IS_PRELOAD action correctly
 *   - should return the current state when an unrelated action type is provided
 */

import { describe, it, expect } from 'vitest';
import isPreloadReducer from './reducer';
import { ActionType } from './action';

describe('isPreloadReducer', () => {
  it('should return the initial state when no action is provided', () => {
    expect(isPreloadReducer(undefined, {})).toBe(true);
  });

  it('should handle IS_PRELOAD action correctly', () => {
    const initialState = true;
    const action = {
      type: ActionType.IS_PRELOAD,
      payload: { isPreload: false },
    };
    expect(isPreloadReducer(initialState, action)).toBe(false);
  });

  it('should return the current state when an unrelated action type is provided', () => {
    const initialState = true;
    const action = { type: 'UNKNOWN' };
    expect(isPreloadReducer(initialState, action)).toBe(true);
  });
});
