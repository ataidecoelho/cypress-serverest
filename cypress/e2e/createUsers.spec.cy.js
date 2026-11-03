describe('Criar Usuários', () => {
  it('Criar Usuário Admin', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type('Peter Pan');
    cy.get('[data-testid="email"]').type('pan@email.com');
    cy.get('[data-testid="password"]').type('@pan123@');
    cy.get('[data-testid="checkbox"]').click();
    cy.get('[data-testid="cadastrar"]').click();
    cy.get(".navbar").should('be.visible');
  });

  it('Criar Usuário Padrão', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type('Incrivel Hulk');
    cy.get('[data-testid="email"]').type('hulk@email.com');
    cy.get('[data-testid="password"]').type('@hulk123@');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get(".navbar").should('be.visible');
  });
});
