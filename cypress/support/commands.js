Cypress.Commands.add("login", (email, password) => {
  cy.request({
    method: "POST",
    url: "https://serverest.dev/login",
    body: {
      email: email,
      password: password,
    }
  }).then((response) => {
    window.localStorage.setItem('serverest/userToken', response.body.authorization)
  })
});

Cypress.Commands.add("productRegistration", (name, price, description, quantity) => {
      cy.request({
        method: "POST",
        url: "https://serverest.dev/produtos",
        body: {
          nome: name,
          preco: price,
          descricao: description,
          quantidade: quantity,
        },
        headers: {
          Authorization: window.localStorage.getItem('serverest/userToken'), 
        }
      })
})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
