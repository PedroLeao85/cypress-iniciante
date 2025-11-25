/// <reference types="cypress" />
describe('Asserts', () => {

    it('Verificar se esta visivel', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user').click()
        cy.get('.account_form > h3').should('be.visible')
        cy.get('.account_form > h3')
            .should('contain', 'Login')
            .should('have.text', 'Login')
    })

   
})
