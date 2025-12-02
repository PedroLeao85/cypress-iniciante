/// <reference types="cypress" />

describe('Cadastro de usuário', () =>{

    it('Validar campo nome vazio', () => {
        cy.visit('/')
        cy.get('.fa-lock').click()
        cy.get('#user').click()
        cy.get('#email').click().type('pedro.leao@123.com.br')
        cy.get('#password').click().type('123456')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo nome deve ser prenchido').and('be.visible')
    })

    
    it('Validar campo e-mail vazio', () => {
        cy.visit('/')
        cy.get('.fa-lock').click()
        cy.get('#user').click().type('Pedro')
        cy.get('#email').click()
        cy.get('#password').click().type('123456')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo e-mail deve ser prenchido corretamente')
            .and('be.visible')
        
    })

    
    it('Validar campo e-mail inválido', () => {
        cy.visit('/')
        cy.get('.fa-lock').click()
        cy.get('#user').click().type('Pedro')
        cy.get('#email').click().type('Pedro')
        cy.get('#password').click().type('123456')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo e-mail deve ser prenchido corretamente')
            .and('be.visible')
    })

    
    it('Validar campo senha vazio', () => {
        cy.visit('/')
        cy.get('.fa-lock').click()
        cy.get('#user').click().type('Pedro')
        cy.get('#email').click().type('pedro@123.com')
        cy.get('#password').click()
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
            .and('be.visible')
    })

    it('Validar campo senha inválida', () => {
        cy.visit('/')
        cy.get('.fa-lock').click()
        cy.get('#user').click().type('Pedro')
        cy.get('#email').click().type('pedro@123.com')
        cy.get('#password').click().type('123')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
            .and('be.visible')
    })

    it('Cadastro realizado com sucesso', () => {
        cy.visit('/')
        cy.get('.fa-lock').click()
        cy.get('#user').click().type('Pedro')
        cy.get('#email').click().type('pedro@123.com')
        cy.get('#password').click().type('123456')
        cy.get('#btnRegister').click()
        cy.get('#swal2-title')
            .should('contain', 'Cadastro realizado!')
        cy.get('#swal2-html-container')
            .should('contain', 'Bem-vindo Pedro')    
    })
    
    
})