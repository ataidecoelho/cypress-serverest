describe('Fazer Login', () => {
  it("Login com Sucesso Usuário Admin", () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="email"]').type('stark@email.com');
    cy.get('[data-testid="senha"]').type('@tony123@');
    cy.get('[data-testid="entrar"]').click();
    cy.get(".navbar").contains('Cadastrar Usuários');
  });

  it('Login com Sucesso Usuário Padrão', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="email"]').type('parker@email.com');
    cy.get('[data-testid="senha"]').type('@peter123@');
    cy.get('[data-testid="entrar"]').click();
    cy.get(".navbar").contains('Carrinho');
  });
});
