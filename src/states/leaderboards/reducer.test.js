/**
 * Test Scenario
 *
 * - leaderboardsReducer
 *   - should return the initial state when no action is given
 *   - should return the initial state when an unknown action type is provided
 *   - should update the state correctly when receiving GET_LEADERBOARDS action
 */

import { describe, it, expect } from 'vitest';
import leaderboardsReducer from './reducer';
import { ActionType } from './action';

describe('leaderboardsReducer', () => {
    it('should return the initial state when no action is given', () => {
        const initialState = [];
        expect(leaderboardsReducer(undefined, {})).toEqual(initialState);
    });

    it('should return the initial state when an unknown action type is provided', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN_ACTION' };
        expect(leaderboardsReducer(initialState, action)).toEqual(initialState);
    });

    it('should update the state correctly when receiving GET_LEADERBOARDS action', () => {
        const initialState = [];
        const newLeaderboards = [{ id: '1', score: 100 }, { id: '2', score: 200 }];
        const action = {
            type: ActionType.GET_LEADERBOARDS,
            payload: { leaderboards: newLeaderboards }
        };
        const expectedState = newLeaderboards;
        expect(leaderboardsReducer(initialState, action)).toEqual(expectedState);
    });
});
