/// <reference types="cypress" />

Cypress.Commands.add('saveRegister' , () =>{
    cy.get('#btnRegister')
            .click()
})


Cypress.Commands.add('fillName' , (name) =>{
    cy.get('#user')
        .type(name)
})

Cypress.Commands.add('fillEmail' , (email) =>{
    cy.get('#email')
        .should('be.visible')
        .type(email)
})

Cypress.Commands.add('fillPassword' , (senha) =>{
    cy.get('#password')
        .should('be.visible')
        .type(senha)
})

Cypress.Commands.add('checkMessage' , (mensagem) =>{
    cy.get('.errorLabel')
            .should('have.text', mensagem)
})

Cypress.Commands.add('checkRegisterSuccess' , (name) =>{
    cy.get('#swal2-title')
            .should('contain', 'Cadastro realizado!')

    cy.get('#swal2-html-container', {timeout: 3000})
            .should('contain', `Bem-vindo ${name}`)        
})
