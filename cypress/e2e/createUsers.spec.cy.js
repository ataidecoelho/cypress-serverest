describe('Criar Usuários', () => {
  it('Criar Usuário Admin', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type('Incrivel Hulk');
    cy.get('[data-testid="email"]').type('incrivel@email.com');
    cy.get('[data-testid="password"]').type('@tony123@');
    cy.get('[data-testid="checkbox"]').click();
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('.alert').should('be.visible');
  });

  it('Criar Usuário Padrão', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type('homem aranha');
    cy.get('[data-testid="email"]').type('homem@email.com');
    cy.get('[data-testid="password"]').type('@peter123@');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('.alert').should('be.visible');
  });
});
