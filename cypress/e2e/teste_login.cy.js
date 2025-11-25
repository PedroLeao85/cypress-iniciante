describe('Teste Automatizado', () => {
  it('Deve executar as ações gravadas', () => {
        cy.visit('https://automationpratice.com.br/');
        cy.get('.right_list_fix > li:nth-child(1) > a:nth-child(1)').click();
        cy.get('#user').click();
        cy.get('#password').click();
        cy.get('#user').type('pedro.leao@123.com.br').as ('email');
        cy.get('#password').type('123456');
        cy.get('#btnLogin').click();
        // cy.get('.swal2-confirm.swal2-styled').click();
        cy.get('#swal2-title')
            .then((element) => {
                console.log(element.text());
                if (element.text() == 'Login realizado') {
                    cy.log('Teste passou: Login realizado com sucesso!');
                } else {
                    cy.log('Teste falhou: Mensagem de sucesso não encontrada.');
                }
            })
        cy.get('@email')
            .then(($input) => {
                console.log($input.text())
                const valorEmail = $input.val();
                if(valorEmail ===  'pedro.leao@123.com.br'){
                    cy.log('O valor do campo de email está correto.');
                }else{
                    cy.log('O valor do campo de email está incorreto.');
                }
            })
            
    })
})
