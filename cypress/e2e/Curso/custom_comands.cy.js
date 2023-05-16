require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
const neatCSV = require('neat-csv')
Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from
// failing the test
    return false
})
describe('custom commands', () => {
    beforeEach('entrar a página',() =>{
        cy.viewport('macbook-16')
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
    })
    it('custom commnands 01 iniciar sesión', () => {
        //iniciar sesión
        //cy.log("prueba")
        cy.Login_liverpool("diego@gmail.com","1234")
    })
    it('custom commnands 02 buscar y agregar sku', () => {
        //agregar sku
        cy.Buscar_sku_liverpool(1131762221)
    })
    it('custom commnands 03 ver carrito', () => {
        //click en boton carrito
        cy.Carrito_compra_liverpool()
    })
    it('custom commnands 04 bloque compra 01', () => {
        cy.Bloque_compra_liverpool01("diego123@gmail.com","1234",1131762221)
    })
    it('custom commnands 05 bloque compra 02', () => {
        cy.Bloque_compra_liverpool02("diego123@gmail.com","1234",1131762221)
    })
    it('custom commnands 06 bloque compra 03', () => {
        cy.Login_liverpool("diego@gmail.com","1234")
        cy.Buscar_sku_liverpool(1131762221)
        cy.Carrito_compra_liverpool()

    })
    it.only('custom commnands 07 compra sin inventario', () => {
        cy.Login_liverpool("diego@gmail.com","1234")
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        let sku=1131762221
        cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type(sku).type("{enter}")
        cy.wait(4000)
        cy.get('#opc_pdp_addCartButton').click({force:true})
        cy.contains('No contamos con el inventario suficiente').then((valor)=> {
            let dato=valor.text()
            cy.log(dato)
            let mensaje="No contamos con el inventario suficiente"
            cy.log(dato)
            expect(dato).to.equal(mensaje)
            if(dato==mensaje)
            {
                cy.log("no existe inventario del producto")
            }
        })
        cy.Carrito_compra_liverpool()
    })
})
