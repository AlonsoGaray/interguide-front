/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('cotiza e2e test', { scrollBehavior: false }, () => {
  it('successfuly completes a order and payment', () => {
    cy.viewport(1024, 800);
    cy.visit('/login');
    cy.get(`[data-cy='login-input_email']`).type('cytest@gmail.com');
    cy.get(`[data-cy='login-input_password']`).type('123456');
    cy.wait(1000);
    cy.get(`[data-cy='login-btn_login']`).click();
    cy.wait(1000);
    cy.contains('Recent Questions');
    cy.get(`[data-cy='post-question-btn']`).click();
    cy.wait(1000);
    cy.get('.company').click();
    cy.wait(1000);
    cy.get('#react-select-3-option-2').click();
    cy.wait(1000);
    cy.get(`[data-cy='question=input']`).type('Test prueba de Cypress');
    cy.wait(1000);
    cy.get('.tagsSelect').click();
    cy.wait(500);
    cy.get('#react-select-5-option-2').click();
    cy.wait(500);
    cy.get('.tagsSelect').click();
    cy.wait(500);
    cy.get('#react-select-5-option-1').click();
    cy.wait(1000);
  });
});
