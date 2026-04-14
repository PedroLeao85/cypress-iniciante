/// <reference types="cypress" />

const elements = {
    accesRegister : '.fa-lock',

    fields:{
        name: '#user'
    }
}


Cypress.Commands.add('accesRegisterPage' , () =>{
    //acessou aplicação
    cy.visit('/')
            .get('.header-logo')

    //entrou no registro        
    cy.get(elements.accesRegister)
        .click()

    //verifica se esta na pagina de cadastro
    cy.get(elements.fields.name)
        .should('be.visible')
})