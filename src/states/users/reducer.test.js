/**
 * Test Scenario
 *
 * - usersReducer
 *   - should return the initial state when given an unknown action type
 *   - should add a new user at the start of the users array when handling REGISTER_USER action
 *   - should replace the users array with the payload when handling GET_ALL_USERS action
 */

import { describe, it, expect } from 'vitest';
import usersReducer from './reducer';
import { ActionType } from './action';

describe('usersReducer', () => {
    it('should return the initial state when given an unknown action type', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN' };
        const nextState = usersReducer(initialState, action);
        expect(nextState).toEqual(initialState);
    });

    it('should add a new user at the start of the users array when handling REGISTER_USER action', () => {
        const initialState = [
            { id: 'user-2', name: 'Jane Doe' }
        ];
        const newUser = { id: 'user-1', name: 'John Doe' };
        const action = {
            type: ActionType.REGISTER_USER,
            payload: { user: newUser }
        };
        const expectedState = [newUser, ...initialState];
        const nextState = usersReducer(initialState, action);
        expect(nextState).toEqual(expectedState);
    });

    it('should replace the users array with the payload when handling GET_ALL_USERS action', () => {
        const initialState = [
            { id: 'user-1', name: 'John Doe' }
        ];
        const newUsers = [
            { id: 'user-2', name: 'Jane Doe' },
            { id: 'user-3', name: 'Alice Doe' }
        ];
        const action = {
            type: ActionType.GET_ALL_USERS,
            payload: { users: newUsers }
        };
        const nextState = usersReducer(initialState, action);
        expect(nextState).toEqual(newUsers);
    });
});
