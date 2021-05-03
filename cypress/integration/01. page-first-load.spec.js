// 01. page-first-load.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Page First Load', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  });

  it('Does not do much!', () => {
    expect(true).to.equal(true)
  });
});
