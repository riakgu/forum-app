/**
 * Test Scenarios for ThreadInput Component
 *
 * - ThreadInput Component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should handle body typing correctly
 *   - should call createThread function when Submit button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadInput from "./ThreadInput";

expect.extend(matchers);

describe('ThreadInput component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle title typing correctly', async () => {
        render(<ThreadInput createThread={() => {}} />);
        const titleInput = screen.getByLabelText('Title');

        await userEvent.type(titleInput, 'Curhat');

        expect(titleInput).toHaveValue('Curhat');
    });

    it('should handle category typing correctly', async () => {
        render(<ThreadInput createThread={() => {}} />);
        const categoryInput = screen.getByLabelText('Category');

        await userEvent.type(categoryInput, 'reactsusah');

        expect(categoryInput).toHaveValue('reactsusah');
    });

    it('should handle body typing correctly', async () => {
        render(<ThreadInput createThread={() => {}} />);
        const bodyInput = screen.getByLabelText('Body');

        await userEvent.type(bodyInput, 'Banget hahah');

        expect(bodyInput).toHaveTextContent('Banget hahah');
    });

    it('should call createThread function when Submit button is clicked', async () => {
        const mockCreateThread = vi.fn();
        render(<ThreadInput createThread={mockCreateThread} />);
        const titleInput = screen.getByLabelText('Title');
        await userEvent.type(titleInput, 'Curhat');
        const categoryInput = screen.getByLabelText('Category');
        await userEvent.type(categoryInput, 'reactsusah');
        const bodyInput = screen.getByLabelText('Body');
        await userEvent.type(bodyInput, 'Banget hahah');
        const createThreadButton = screen.getByRole('button', { title: 'Submit' });

        await userEvent.click(createThreadButton);

        expect(mockCreateThread).toHaveBeenCalledWith({
            title: 'Curhat',
            category: 'reactsusah',
            body: 'Banget hahah',
        });
    });
});
