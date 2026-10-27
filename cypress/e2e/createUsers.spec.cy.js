describe("Criar Usuários", () => {
  it("Criar Usuário Admin", () => {
    cy.visit("https://front.serverest.dev/login");
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type("Tony Stark");
    cy.get('[data-testid="email"]').type("stark@email.com");
    cy.get('[data-testid="password"]').type("@tony123@");
    cy.get('[data-testid="checkbox"]').click();
    cy.get('[data-testid="cadastrar"]').click();
    cy.get(".navbar").contains("Cadastrar Usuários");
  });

  it("Criar Usuário Padrão", () => {
    cy.visit("https://front.serverest.dev/login");
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type("Peter Parker");
    cy.get('[data-testid="email"]').type("parker@email.com");
    cy.get('[data-testid="password"]').type("@peter123@");
    cy.get('[data-testid="cadastrar"]').click();
    cy.get(".navbar").contains("Carrinho");
  });
});
