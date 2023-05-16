require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('alias', () => {

     it('alias 01', () => {
        cy.viewport('macbook-16')
        //entramos a página de de prueba
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //ingresamos a iniciar sesión
        cy.get('.order-lg-4 > .a-header__topLink').click()
        cy.get('#username').as("usuario")
        cy.get("@usuario").type("pruebaliver@gmail.com")
        cy.get('#password').as("password")
        cy.get("@password").type("1234")
        cy.log("Prueba correcta")
     })    
})