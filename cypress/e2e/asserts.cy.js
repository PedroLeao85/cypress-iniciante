/// <reference types="cypress" />
describe('Asserts', () => {

    it.only('Verificar se esta visivel', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user')
            .should('be.visible')
            .click()

        cy.get('.account_form > h3')
            .should('be.visible')

        cy.get('.account_form > h3')
            .should('contain', 'Login')
            .should('have.text', 'Login')

        cy.get('.account_form > h3')
            .then((element) => {
                expect(element.text()).equal('Login')
                expect(element).to.be.visible
                expect(element).not.disabled
            })    


    })

   
})
