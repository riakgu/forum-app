/**
 * - Leaderboard spec
 *   - should display leaderboard page correctly
 *   - should display leaderboard items correctly
 *   - should sort leaderboard items by score in descending order
 */

describe('Leaderboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/leaderboard');
  });

  it('should display leaderboard page correctly', () => {
    cy.get('h2').should('contain', 'Active Users');
    cy.get('.leaderboards-list').should('be.visible');
    cy.get('.leaderboards-list__user-label').should('contain', 'User');
    cy.get('.leaderboards-list__score-label').should('contain', 'Score');
  });

  it('should display leaderboard items correctly', () => {
    cy.get('.leaderboard-item').should('have.length.greaterThan', 0);
    cy.get('.leaderboard-item').each(($item) => {
      cy.wrap($item).find('.leaderboard-item__user-info img').should('be.visible');
      cy.wrap($item).find('.leaderboard-item__user-info p').should('not.be.empty');
      cy.wrap($item).find('.leaderboard-item__score').should('not.be.empty');
    });
  });

  it('should sort leaderboard items by score in descending order', () => {
    cy.get('.leaderboard-item')
        .then(($items) => {
          const scores = Array.from($items).map(($item) =>
              parseInt($item.querySelector('.leaderboard-item__score').textContent)
          );
          const sortedScores = scores.slice().sort((a, b) => b - a);
          expect(scores).to.deep.equal(sortedScores);
        });
  });
});
