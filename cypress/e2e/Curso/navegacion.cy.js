require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
const neatCSV = require('neat-csv')
Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from
// failing the test
    return false
})
describe('navegación entre páginas', () => {
    it('back, forward y reload', () => {
        cy.viewport('macbook-16')
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //click a iniciar sesión
        cy.get('.order-lg-4 > .a-header__topLink').click({force:true})
        cy.get('#username').type('diego123@gmail.com')
        cy.get('#password').type('1234')
        //recargar la pagina
        cy.reload()
        cy.wait(3000)
        //regresar a pagina anterior
        cy.go("back")
        cy.go("back")
        //cy.go("forward")
    })
})