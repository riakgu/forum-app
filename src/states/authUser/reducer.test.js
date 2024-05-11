/**
 * Test Scenario
 *
 * - authUserReducer
 *   - should return the initial state when no action is given
 *   - should update the state with the authUser when receiving LOGIN action
 *   - should return the current state when an unrelated action type is provided
 */

import { describe, it, expect } from 'vitest';
import authUserReducer from './reducer';
import { ActionType } from './action';

describe('authUserReducer', () => {
    it('should return the initial state when no action is given', () => {
        const initialState = null;
        expect(authUserReducer(undefined, {})).toBe(initialState);
    });

    it('should update the state with the authUser when receiving LOGIN action', () => {
        const initialState = null;
        const authUser = { id: 'user-1', name: 'John Doe' };
        const action = {
            type: ActionType.LOGIN,
            payload: { authUser }
        };
        expect(authUserReducer(initialState, action)).toEqual(authUser);
    });

    it('should reset the state to null when receiving LOGOUT action', () => {
        const initialState = { id: 'user-1', name: 'John Doe' };
        const action = { type: ActionType.LOGOUT };
        expect(authUserReducer(initialState, action)).toBeNull();
    });

    it('should return the current state when an unrelated action type is provided', () => {
        const initialState = { id: 'user-1', name: 'John Doe' };
        const action = { type: 'UNKNOWN' };
        expect(authUserReducer(initialState, action)).toEqual(initialState);
    });
});
