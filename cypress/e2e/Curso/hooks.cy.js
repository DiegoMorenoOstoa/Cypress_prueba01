require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
const neatCSV = require('neat-csv')
Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from
// failing the test
    return false
})
describe('hooks', () => {
    before(() => {
        cy.viewport('macbook-16')
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        })
    beforeEach(() => {
        cy.log("2.- Esto se repite al inicio de cada uno de los test(it)")
        cy.viewport('macbook-16')
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        })
    afterEach(() => {
        cy.log("3.- esto se repite al final cada uno de los test(it)")
        cy.go("back")
        })
    after(() => {
        cy.log("4.- **** utlimo ciclo-final de tdoa la prueba *****")
        cy.go("back")
        cy.go("back")
        })
    it('iniciar sesión', () => {
        cy.get('.order-lg-4 > .a-header__topLink').click({force:true})
        cy.get('#username').type('diego123@gmail.com')
        cy.get('#password').type('1234')
        cy.contains('Iniciar sesión').click({force:true})
    })
    it('buscar sku', () => {
        //declaramos la variable con el SKU de un producto en la página
        let sku=1080377133
        //buscamos la barra de busqueda e ingresamos el sku declarado
        cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type(sku).type("{enter}")
    })
})