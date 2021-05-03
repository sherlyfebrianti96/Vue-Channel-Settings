// 01. page-first-load.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Page First Load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
    cy.viewport('macbook-15');
  });

  it('should show the sidebar and the container on first load', () => {
    cy.get('#sidebar').should('exist');
    cy.get('#app.container').should('exist');
  });

  describe('should open and close the sidebar when the sidebar toggle is clicked multiple times', () => {
    it('should close the sidebar when the sidebar toggle is clicked', () => {
      cy.get('.sidebar-toggle:visible').first().click();
      cy.get('#sidebar').should('not.exist');
      cy.get('#app.container').should('exist');
    });

    it('should open the sidebar when the sidebar toggle is clicked again', () => {
      cy.get('.sidebar-toggle:visible').first().click();
      cy.get('.sidebar-toggle:visible').first().click();
      cy.get('#sidebar').should('exist');
      cy.get('#app.container').should('exist');
    });
  });
});
