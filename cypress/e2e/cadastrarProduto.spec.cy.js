describe('Cadastrar Produtos', () => {
    it('Cadastrar Produtos', () => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="email"]').type('stark@email.com')
        cy.get('[data-testid="senha"]').type('@tony123@')
        cy.get('[data-testid="entrar"]').click()
        cy.get('[data-testid="cadastrar-produtos"]').click()
        cy.get('[data-testid="nome"]').type('TV LG 50 Polegadas')
        cy.get('[data-testid="preco"]').type('3200')
        cy.get('[data-testid="descricao"]').type('TV LG 4k QNED')
        cy.get('[data-testid="quantity"]').type('42')
        cy.get('[data-testid="cadastarProdutos"]').click()

    })
})