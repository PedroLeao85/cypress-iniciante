/// <reference types="cypress" />
describe('Interacoes', () => {

    it('Digitar em um campo', () => {
        cy.visit('/')
            .get('.header-logo')

       cy.get('.form-control').type('pedro@hotmail.com')

    })

    it('Click', () => {
        cy.visit('/')

        // //click simples
        // cy.get('.fa-user').click()

        // //click duplo
        // cy.get('.fa-user').dblclick

        //click com o botao direito
        //cy.get('.fa-user').rightclick()

        //click por coordenadas
        //cy.get('.fa-user').click(100,100, {force: true })  

        //simular apertar enter
        cy.get('.form-control').type('pedro@hotmail.com{enter}')

    })

    it('Select', () => {
        cy.visit('/')
        
        cy.get('.footer_one_widget').contains('Checkout View Two').click()
        cy.get('#country').select('Colombia')       

    })

    it.only('Checkbox e radio button', () => {
        cy.visit('/')

        cy.get('.footer_one_widget').contains('Checkout View One').click()
        cy.get('#materialUnchecked').check().uncheck()
        
        cy.get('#css').check()

    })    
})
