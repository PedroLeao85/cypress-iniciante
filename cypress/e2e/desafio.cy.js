/// <reference types="cypress" />

describe('Cadastro de usuário', () =>{

    const user_name = 'Pedro'
    const user_email = 'pedro@123.com'
    const user_password = '123456'

    it('Validar campo nome vazio', () => {
        // cy.visit('/')
        //     .get('.header-logo')
        // cy.get('.fa-lock').click()
        // cy.get('#user').click()
        // cy.get('#email').click().type('pedro.leao@123.com.br')
        // cy.get('#password').click().type('123456')
        // cy.get('#btnRegister').click()
        // cy.get('#errorMessageFirstName')
        //     .should('contain', 'O campo nome deve ser prenchido').and('be.visible')
        
        cy.visit('/')
             .get('.header-logo')
        
        cy.get('.fa-lock')
            .click()
            .get('#user')
            .should('be.visible')     

        cy.get('#btnRegister')
            .click()
            
        cy.get('.errorLabel')
            .should('have.text', 'O campo nome deve ser prenchido')    
    })

    
    it('Validar campo e-mail vazio', () => {
        // cy.visit('/')
        // cy.get('.fa-lock').click()
        // cy.get('#user').click().type('Pedro')
        // cy.get('#email').click()
        // cy.get('#password').click().type('123456')
        // cy.get('#btnRegister').click()
        // cy.get('#errorMessageFirstName')
        //     .should('contain', 'O campo e-mail deve ser prenchido corretamente')
        //     .and('be.visible')

        cy.visit('/')
             .get('.header-logo')
        
        cy.get('.fa-lock')
            .click()
            .get('#user').click().type(user_name)
            .get('#password').click().type(user_password)
            .should('be.visible')     

        cy.get('#btnRegister')
            .click()
            
        cy.get('.errorLabel')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente') 
        
    })

    
    it('Validar campo e-mail inválido', () => {
        // cy.visit('/')
        // cy.get('.fa-lock').click()
        // cy.get('#user').click().type('Pedro')
        // cy.get('#email').click().type('Pedro')
        // cy.get('#password').click().type('123456')
        // cy.get('#btnRegister').click()
        // cy.get('#errorMessageFirstName')
        //     .should('contain', 'O campo e-mail deve ser prenchido corretamente')
        //     .and('be.visible')
        
        cy.visit('/')
             .get('.header-logo')
        
        cy.get('.fa-lock')
            .click()
            .get('#user').click().type(user_name)
            .get('#email').click().type('Pedro')
            .get('#password').click().type(user_password)
            .should('be.visible')     

        cy.get('#btnRegister')
            .click()
            
        cy.get('.errorLabel')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')

    })

    
    it('Validar campo senha vazio', () => {
        // cy.visit('/')
        // cy.get('.fa-lock').click()
        // cy.get('#user').click().type('Pedro')
        // cy.get('#email').click().type('pedro@123.com')
        // cy.get('#password').click()
        // cy.get('#btnRegister').click()
        // cy.get('#errorMessageFirstName')
        //     .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
        //     .and('be.visible')

        cy.visit('/')
             .get('.header-logo')
        
        cy.get('.fa-lock')
            .click()
            .get('#user').click().type(user_name)
            .get('#email').click().type(user_email)
            .should('be.visible')     

        cy.get('#btnRegister')
            .click()

        cy.get('.errorLabel')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')    
    })

    it('Validar campo senha inválida', () => {
        // cy.visit('/')
        // cy.get('.fa-lock').click()
        // cy.get('#user').click().type('Pedro')
        // cy.get('#email').click().type('pedro@123.com')
        // cy.get('#password').click().type('123')
        // cy.get('#btnRegister').click()
        // cy.get('#errorMessageFirstName')
        //     .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
        //     .and('be.visible')
        cy.visit('/')
             .get('.header-logo')
        
        cy.get('.fa-lock')
            .click()
            .get('#user').click().type(user_name)
            .get('#email').click().type(user_email)
            .get('#password').click().type('123')
            .should('be.visible')     

        cy.get('#btnRegister')
            .click()

        cy.get('.errorLabel')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Cadastro realizado com sucesso', () => {
        // cy.visit('/')
        // cy.get('.fa-lock').click()
        // cy.get('#user').click().type('Pedro')
        // cy.get('#email').click().type('pedro@123.com')
        // cy.get('#password').click().type('123456')
        // cy.get('#btnRegister').click()
        // cy.get('#swal2-title')
        //     .should('contain', 'Cadastro realizado!')
        // cy.get('#swal2-html-container')
        //     .should('contain', 'Bem-vindo Pedro')    

        cy.visit('/')
             .get('.header-logo')
        
        cy.get('.fa-lock')
            .click()
            .get('#user').click().type(user_name)
            .get('#email').click().type(user_email)
            .get('#password').click().type('123456')
            .should('be.visible')     

        cy.get('#btnRegister')
            .click()

        cy.get('#swal2-title')
            .should('contain', 'Cadastro realizado!')      
            .get('#swal2-html-container')
            .should('contain', `Bem-vindo ${user_name}`)
    })
    
    
})