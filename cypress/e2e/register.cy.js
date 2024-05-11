/**
 * - Register spec
 *   - should display registration page correctly
 *   - should display error message when name is empty
 *   - should display error message when email is empty
 *   - should display error message when password is empty
 *   - should display error message when email is invalid
 *   - should display error message when email is already taken
 *   - should register successfully and navigate to the login page
 */

describe('Registration', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register');
  });

  it('should display registration page correctly', () => {
    cy.get('h2').should('contain', 'Fill out the form to register for an account.');
    cy.get('input[type="text"]').should('be.visible');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('contain', 'Register');
    cy.get('a').should('contain', 'Login here');
  });

  it('should display error message when name is empty', () => {
    cy.get('input[type="email"]').type('valid@email.com');
    cy.get('input[type="password"]').type('validpassword');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`"name" is not allowed to be empty`);
    });
  });

  it('should display error message when email is empty', () => {
    cy.get('input[type="text"]').type('John Doe');
    cy.get('input[type="password"]').type('validpassword');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`"email" is not allowed to be empty`);
    });
  });

  it('should display error message when password is empty', () => {
    cy.get('input[type="text"]').type('John Doe');
    cy.get('input[type="email"]').type('valid@email.com');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`"password" is not allowed to be empty`);
    });
  });

  it('should display error message when email is invalid', () => {
    cy.get('input[type="text"]').type('John Doe');
    cy.get('input[type="email"]').type('invalid-email');
    cy.get('input[type="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`"email" must be a valid email`);
    });
  });

  it('should display error message when email is already taken', () => {
    cy.get('input[type="text"]').type('John Doe');
    cy.get('input[type="email"]').type('valid@email.com');
    cy.get('input[type="password"]').type('validpassword');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email is already taken');
    });
  });

  it('should register successfully and navigate to the login page', () => {
    cy.get('input[type="text"]').type('John Doe');
    cy.get('input[type="email"]').type(`${Date.now()}@email.com`);
    cy.get('input[type="password"]').type('validpassword');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');
    cy.get('h2').should('contain', 'Login to use the app.');
  });
});
