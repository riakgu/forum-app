/**
 * - Login spec
 *   - should display login page correctly
 *   - should display error message when email is empty
 *   - should display error message when password is empty
 *   - should display error message when email or password is invalid
 *   - should login successfully and navigate to the home page
 */

describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
  });

  it('should display login page correctly', () => {
    cy.get('h2').should('contain', 'Login to use the app.');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('contain', 'Login');
    cy.get('a').should('contain', 'Register here');
  });

  it('should display error message when email is empty', () => {
    cy.get('input[type="password"]').type('validpassword');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`"email" is not allowed to be empty`);
    });
  });

  it('should display error message when password is empty', () => {
    cy.get('input[type="email"]').type('valid@email.com');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`"password" is not allowed to be empty`);
    });
  });

  it('should display error message when email or password is invalid', () => {
    cy.get('input[type="email"]').type('invalid-email');
    cy.get('input[type="password"]').type('invalid-password');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should login successfully and navigate to the home page', () => {
    cy.get('input[type="email"]').type('valid@email.com');
    cy.get('input[type="password"]').type('validpassword');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
    cy.get('a').should('contain', 'Logout');
  });
});
