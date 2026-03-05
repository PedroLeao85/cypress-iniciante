/// <reference types="cypress" />

Cypress.Commands.add('accesRegisterPage' , () =>{
    cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock')
            .click()
            .get('#user')
            .should('be.visible')
})