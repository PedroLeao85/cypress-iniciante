describe('Interacoes', () => {

    it('Digitar em um campo', () => {
        cy.visit('/')
            .get('.header-logo')

       cy.get('.form-control').type('pedro@hotmail.com')

        
    })
 

})

