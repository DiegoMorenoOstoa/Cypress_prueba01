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
Cypress.Commands.add('Login_liverpool', (email, password) => {
    cy.get('.order-lg-4 > .a-header__topLink').click({force:true})
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.contains('Iniciar sesión').click({force:true})
})
Cypress.Commands.add('Buscar_sku_liverpool', (sku) => {
cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //buscamos la barra de busqueda e ingresamos el sku declarado
        cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type(sku).type("{enter}")
        cy.wait(4000)
        cy.get('#opc_pdp_addCartButton').click({force:true})
    })
Cypress.Commands.add('Carrito_compra_liverpool', () => {
    cy.get('.a-header__bag > span').click({force:true})
    })
Cypress.Commands.add('Bloque_compra_liverpool01', (email,password,sku) => {
    cy.get('.order-lg-4 > .a-header__topLink').click({force:true})
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.contains('Iniciar sesión').click({force:true})
    cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
    //buscamos la barra de busqueda e ingresamos el sku declarado
    cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type(sku).type("{enter}")
    cy.wait(4000)
    cy.get('#opc_pdp_addCartButton').click({force:true})
    cy.get('.a-header__bag > span').click({force:true})
    })
Cypress.Commands.add('Bloque_compra_liverpool02', (email,password,sku) => {
    cy.Login_liverpool(email, password)
    cy.Buscar_sku_liverpool(sku)
    cy.Carrito_compra_liverpool()
    })
    