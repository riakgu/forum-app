/**
 * Test Scenarios for RegisterInput Component
 *
 * - RegisterInput Component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from "./RegisterInput";

expect.extend(matchers);

describe('RegisterInput component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle name typing correctly', async () => {
        render(<RegisterInput register={() => {}} />);
        const nameInput = screen.getByLabelText('Name');

        await userEvent.type(nameInput, 'Rizky');

        expect(nameInput).toHaveValue('Rizky');
    });

    it('should handle email typing correctly', async () => {
        render(<RegisterInput register={() => {}} />);
        const emailInput = screen.getByLabelText('Email');

        await userEvent.type(emailInput, 'riakgu@test.com');

        expect(emailInput).toHaveValue('riakgu@test.com');
    });

    it('should handle password typing correctly', async () => {
        render(<RegisterInput register={() => {}} />);
        const passwordInput = screen.getByLabelText('Password');

        await userEvent.type(passwordInput, 'riakgu');

        expect(passwordInput).toHaveValue('riakgu');
    });

    it('should call register function when register button is clicked', async () => {
        const mockRegister = vi.fn();
        render(<RegisterInput register={mockRegister} />);
        const nameInput = screen.getByLabelText('Name');
        await userEvent.type(nameInput, 'Rizky');
        const emailInput = screen.getByLabelText('Email');
        await userEvent.type(emailInput, 'riakgu@test.com');
        const passwordInput = screen.getByLabelText('Password');
        await userEvent.type(passwordInput, 'riakgu');
        const registerButton = screen.getByRole('button', { name: 'Register' });

        await userEvent.click(registerButton);

        expect(mockRegister).toHaveBeenCalledWith({
            name: 'Rizky',
            email: 'riakgu@test.com',
            password: 'riakgu',
        });
    });
});
