// cypress testing. to run test: npm run cypress:open then click sample_spec.js
/// <reference types="cypress" />
beforeEach(() => {
  cy.visit('http://localhost:3000');
});

describe('App Testing Cypress', function () {
  // 1) test to render h1 tags UI
  it('render the title', () => {
    cy.get('.has-text-black').should('have.text', 'To Do Test');
  });

  // 2) test to render submit will add onto list
  it('click submit will add onto list', () => {
    cy.get('input').type('React');
    cy.get('#submit').click();
    cy.get('.checkbox').should('be.visible');
    cy.get('.checkbox').should('have.text', 'React');
  });

  // 3) test click of check will check checkbox, and click again will remove checkbox... checking checkbox checks checkbox :D
  it('click of check will toggle checkbox true, and click again toggles checkbox false', () => {
    cy.get('input').type('React');
    cy.get('#submit').click();
    cy.get('.checkbox').should('be.visible');
    cy.get('[type="checkbox"]').check().should('be.checked')
    cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')
  });

  // 4) test click of check update complete total + 1
  it('check of checkbox updates complete', () => {
    cy.get('input').type('React');
    cy.get('#submit').click();
    cy.get('[type="checkbox"]').check().should('be.checked')
    cy.get('#total').should('have.text', '1');
  });

  // 5) test click of check update complete total - 1
  it('uncheck of checkbox updates complete', () => {
    cy.get('input').type('React');
    cy.get('#submit').click();
    cy.get('[type="checkbox"]').check().should('be.checked')
    cy.get('input[type="checkbox"]').uncheck().should('not.be.checked');
    cy.get('#total').should('have.text', '0');
  });
});