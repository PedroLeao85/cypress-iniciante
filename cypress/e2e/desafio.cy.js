/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const user_data = require('../fixtures/desafio_valid_data.json')
const user_invalid = require('../fixtures/desafio_invalid_data.json')

describe('Cadastro de usuário', () =>{

   

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
            .get('#user').click().type(user_data.name)
            .get('#password').click().type(user_data.password)
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
            .get('#user').click().type(user_data.name)
            .get('#email').click().type(user_invalid.email)
            .get('#password').click().type(user_data.password)
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
            .get('#user').click().type(user_data.name)
            .get('#email').click().type(user_data.email)
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
            .get('#user').click().type(user_data.name)
            .get('#email').click().type(user_data.email)
            .get('#password').click().type(user_invalid.password)
            .should('be.visible')     

        cy.get('#btnRegister')
            .click()

        cy.get('.errorLabel')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')

    })

    it.only('Cadastro realizado com sucesso', () => {
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

        const name = faker.person.fullName();  
        const email = faker.internet.email(); 

        cy.visit('/')
             .get('.header-logo')
        
        cy.get('.fa-lock')
            .click()
            .get('#user').click().type(name)
            .get('#email').click().type(email)
            .get('#password').click().type(user_data.password)
            .should('be.visible')     

        cy.get('#btnRegister')
            .click()

        cy.get('#swal2-title')
            .should('contain', 'Cadastro realizado!')      
            .get('#swal2-html-container')
            .should('contain', `Bem-vindo ${name}`)
    })
    
    
})