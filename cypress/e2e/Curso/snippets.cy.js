require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('snippets', () => {

     it('snippet 01', () => {
        cy.viewport('macbook-16')
        //cy_login_liver (snippet)
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        cy.get('.order-lg-4 > .a-header__topLink').click({force:true})
        cy.get('#username').type('diego123@gmail.com')
        cy.get('#password').type('1234')
        cy.contains('Iniciar sesión').click({force:true})
     })
})