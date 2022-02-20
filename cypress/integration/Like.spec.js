/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Like Button', { scrollBehavior: false }, () => {
  it('Succesfully like and dislike button', () => {
    cy.viewport(1024, 800);
    cy.visit('/login');
    cy.get(`[data-cy='login-input_email']`).type('cytest@gmail.com');
    cy.get(`[data-cy='login-input_password']`).type('123456');
    cy.wait(500);
    cy.get(`[data-cy='login-btn_login']`).click();
    cy.wait(1000);
    cy.contains('Recent Questions');
    cy.wait(500);
    cy.get(`[data-cy='like-btn']`).first().click();
    cy.wait(1000);
    cy.get(`[data-cy='dislike-btn']`).first().click();
    cy.wait(1000);
  });
});
