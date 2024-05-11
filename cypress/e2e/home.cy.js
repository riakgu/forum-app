/**
 * - Homepage spec
 *   - should display homepage correctly
 *   - should filter threads by category
 */

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display homepage correctly', () => {
    cy.get('h2').first().should('contain', 'Popular Category');
    cy.get('.categories-list').should('be.visible');
    cy.get('h2').last().should('contain', 'Available Discussion');
    cy.get('.threads-list').should('be.visible');
  });

  it('should filter threads by category', () => {
    cy.get('.category-item').first().then(($category) => {
      const categoryText = $category.text();
      cy.wrap($category).click();
      cy.get('.thread-item').each(($item) => {
        cy.wrap($item)
            .find('.thread-item__category')
            .should('have.text', categoryText);
      });
    });
  });
});
