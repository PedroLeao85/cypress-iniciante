describe('Get Texts', () => {

    it('Obter texto de um elemento', () => {
        cy.visit('/')
            .get('.header-logo')

       cy.get('.form-control').type('pedro@hotmail.com')

        
    })
 

})

// then - para trabalhar com o elemento selecionado
