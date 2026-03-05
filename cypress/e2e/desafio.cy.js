/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const user_data = require('../fixtures/desafio_valid_data.json')
const user_invalid = require('../fixtures/desafio_invalid_data.json')

describe('Cadastro de usuário', () => {

    beforeEach('Acessando página de cadastro', () => {
        cy.accesRegisterPage();
    })

    it('Validar campo nome vazio', () => {

        cy.saveRegister();
        cy.checkMessage('O campo nome deve ser prenchido')
    })


    it('Validar campo e-mail vazio', () => {

        cy.fillName(user_data.name)
        cy.fillPassword(user_data.password)
        cy.saveRegister();

        cy.checkMessage('O campo e-mail deve ser prenchido corretamente')

    })


    it('Validar campo e-mail inválido', () => {

        cy.fillName(user_data.name)
        cy.fillEmail(user_invalid.email)
        cy.fillPassword(user_data.password)
        cy.saveRegister();
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente')


    })


    it('Validar campo senha vazio', () => {

        cy.fillName(user_data.name)
        cy.fillEmail(user_data.email)
        cy.saveRegister();
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar campo senha inválida', () => {


        cy.fillName(user_data.name)
        cy.fillEmail(user_data.email)
        cy.fillPassword(user_invalid.password)
        cy.saveRegister();
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Cadastro realizado com sucesso', () => {

        const name = faker.person.fullName();
        const email = faker.internet.email();

        cy.fillName(name)
        cy.fillEmail(email)
        cy.fillPassword(user_data.password)
        cy.saveRegister();
        cy.checkRegisterSuccess(name)

        
    })


})