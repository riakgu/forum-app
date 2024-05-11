/**
 * Test Scenarios for LoginInput Component
 *
 * - LoginInput Component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginInput from "./LoginInput";

expect.extend(matchers);

describe('LoginInput component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle email typing correctly', async () => {
        const mockLogin = vi.fn();
        render(<LoginInput login={mockLogin} />);
        const emailInput = screen.getByLabelText('Email');

        await userEvent.type(emailInput, 'riakgu@test.com');

        expect(emailInput).toHaveValue('riakgu@test.com');
    });

    it('should handle password typing correctly', async () => {
        const mockLogin = vi.fn();
        render(<LoginInput login={mockLogin} />);
        const passwordInput = screen.getByLabelText('Password');

        await userEvent.type(passwordInput, 'riakgu');

        expect(passwordInput).toHaveValue('riakgu');
    });

    it('should call login function when login button is clicked', async () => {
        const mockLogin = vi.fn();
        render(<LoginInput login={mockLogin} />);
        const emailInput = screen.getByLabelText('Email');
        await userEvent.type(emailInput, 'riakgu@test.com');
        const passwordInput = screen.getByLabelText('Password');
        await userEvent.type(passwordInput, 'riakgu');
        const loginButton = screen.getByRole('button', { name: 'Login' });

        await userEvent.click(loginButton);

        expect(mockLogin).toHaveBeenCalledWith({
            email: 'riakgu@test.com',
            password: 'riakgu',
        });
    });
});
