/// <reference types="cypress" />

//Elementos
const elements = {
    buttons:{
        register: '#btnRegister'
    },
    fields:{
        name: '#user',
        email: '#email',
        password: '#password'
    },
    messages:{
        error: '.errorLabel',
        successTitle: '#swal2-title',
        successSubtitle: '#swal2-html-container'
    }
}


//Ações/métodos/funções
Cypress.Commands.add('saveRegister' , () =>{
    cy.get(elements.buttons.register)
            .click()
})


Cypress.Commands.add('fillName' , (name) =>{
    cy.get(elements.fields.name)
        .type(name)
})

Cypress.Commands.add('fillEmail' , (email) =>{
    cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)
})

Cypress.Commands.add('fillPassword' , (senha) =>{
    cy.get(elements.fields.password)
        .should('be.visible')
        .type(senha)
})

Cypress.Commands.add('checkMessage' , (mensagem) =>{
    cy.get(elements.messages.error)
            .should('have.text', mensagem)
})

Cypress.Commands.add('checkRegisterSuccess' , (name) =>{
    cy.get(elements.messages.successTitle)
            .should('contain', 'Cadastro realizado!')

    cy.get(elements.messages.successSubtitle, {timeout: 3000})
            .should('contain', `Bem-vindo ${name}`)        
})
