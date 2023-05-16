require('@cypress/xpath')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Funciones asserts', () => {
       it.only('assert eq', () => {
        //entramos a página de de prueba
        cy.visit('www.liverpool.com.mx', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        cy.get('#mainSearchbar').should("be.visible").should("be.enabled").type("formula 1").type('{enter}')
        cy.log("prueba correcta")
        cy.get('.order-lg-4 > .a-header__topLink').click()

        })
  })