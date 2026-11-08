describe("Tamplate spec", () => {
  let produto = "Bolinha" + Math.random()
  it("Fluxo de CRUD de produto", () => {
    cy.login('stark@email.com', '@tony123@');
    cy.visit("https://front.serverest.dev/admin/home");
    cy.get('[data-testid="cadastrar-produtos"]').click();
    cy.get('[data-testid="nome"]').type(produto);
    cy.get('[data-testid="preco"]').type("50");
    cy.get('[data-testid="descricao"]').type("Bolinha de Golfe");
    cy.get('[data-testid="quantity"]').type("20");
    cy.get('[data-testid="cadastarProdutos"]').click();
    cy.get('h1').contains('Lista dos Produtos')
    cy.get('tbody').should('be.visible')
    cy.get('tr').each(($row) => {      
      if($row.find('td').eq(0).text() === produto) {
        $row.find('td').eq(5).children('div').children('.btn-danger').click()
      }
    })
    cy.get('td').should('not.include.text', produto)
  });
});
