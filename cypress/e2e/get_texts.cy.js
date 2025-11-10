describe('Login', () => {

    it('Login com sucesso', () => {
        cy.visit('/') // dessa maneira acessa a baseUrl configurada no cypress.config.js
            .get('.header-logo')

        cy.get('#top_header').as('cabecalho')
            .contains('Login')
            .click()    

        cy.get('#top_header')
           .find('.fa-user')
           
        cy.get('@cabecalho')
            .find('.fa-user')
    })
 

})

// get() - seleciona elementos

//contains() - seleciona elementos com base no texto
//geralmente diminuimos o escopo com um get()

// find() - para encontrar elementos
// geralmente diminuimos o escopo com um get()

// as() - para criar um alias (apelido) para um elemento
