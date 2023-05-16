require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
const neatCSV = require('neat-csv')
Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from
// failing the test
    return false
})
describe('hooks', () => {
    //declaramos la variable con el SKU de un producto en la página
    let sku1=1080377133, sku2=1132973052, sku3=1131762221, sku4=1126456683
    beforeEach(() => {
        cy.log("2.- Esto se repite al inicio de cada uno de los test(it)")
        cy.viewport('macbook-16')
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        })
    afterEach(() => {
        cy.log("Caso de prueba finalizado con éxito")
        })
    after(() => {
        cy.wait(2000)
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //click al carrito de compra
        cy.get(".a-header__bag").click({force:true})
        })
    it('iniciar sesión', () => {
        cy.get('.order-lg-4 > .a-header__topLink').click({force:true})
        cy.get('#username').type('diego123@gmail.com')
        cy.get('#password').type('1234')
        cy.contains('Iniciar sesión').click({force:true})
    })
    it('buscar sku1', () => {
        //buscamos la barra de busqueda e ingresamos el sku declarado
        cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type(sku1).type("{enter}")
    })
    it('buscar sku2', () => {
        //buscamos la barra de busqueda e ingresamos el sku declarado
        cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type(sku2).type("{enter}")
    })
    it('buscar sku3', () => {
        //buscamos la barra de busqueda e ingresamos el sku declarado
        cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type(sku3).type("{enter}")
    })
    it('buscar sku4', () => {
        //buscamos la barra de busqueda e ingresamos el sku declarado
        cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type(sku4).type("{enter}")
    })
})