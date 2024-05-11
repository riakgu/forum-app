/**
 * Test Scenarios for CommentInput Component
 *
 * - CommentInput Component
 *   - should not display the comment input area when the user is not authenticated
 *   - should handle comment typing correctly when user is authenticated
 *   - should call createComment function when Submit button is clicked
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CommentInput from "./CommentInput";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureStore([]);
let store;

describe('CommentInput component', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    afterEach(() => {
        cleanup();
    });

    it('should not display the comment input area when the user is not authenticated', async () => {
        store = mockStore({
            authUser: false
        });
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CommentInput createComment={() => {}} />
                </MemoryRouter>
            </Provider>
        );

        const commentInput = screen.queryByLabelText("Comment");
        expect(commentInput).not.toBeInTheDocument();
    });

    it('should handle comment typing correctly when user is authenticated', async () => {
        store = mockStore({
            authUser: true
        });
        render(
            <Provider store={store}>
                <CommentInput createComment={() => {}} />
            </Provider>
        );

        const commentInput = screen.getByLabelText('Comment');
        await userEvent.type(commentInput, 'test comment');

        expect(commentInput).toHaveTextContent('test comment');
    });

    it('should call createComment function when Submit button is clicked', async () => {
        store = mockStore({
            authUser: true
        });
        const mockCreateComment = vi.fn();
        render(
            <Provider store={store}>
                <CommentInput createComment={mockCreateComment} />
            </Provider>
        );

        const commentInput = screen.getByLabelText('Comment');
        await userEvent.type(commentInput, 'test comment');

        const createCommentButton = screen.getByRole('button', { name: 'Submit' });
        await userEvent.click(createCommentButton);

        expect(mockCreateComment).toHaveBeenCalledWith({
            content: 'test comment',
        });
    });
});
