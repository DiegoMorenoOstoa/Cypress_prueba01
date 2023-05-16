require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('alertas', () => {

     it('alerta de seleccionar talla', () => {
        cy.viewport('macbook-16')
        //entramos a página de de prueba
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //declaramos la variable con el SKU de un producto en la página
        let sku=1080377133
        //buscamos la barra de busqueda e ingresamos el sku declarado
        cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type(sku).type("{enter}")
        cy.wait(2000)
        //damos click a boton de agregar al carrito
        cy.get('#opc_pdp_addCartButton').click({force:true})
        //mapeamos el elemto que contiene la alerta y validamos su texto 
        cy.get('.min-vh-100 > .m-alert__container > .m-mdc__snackbarSurface > .m-mdc__snackbarLabel').should("have.text","Selecciona una talla")
        //damos click  boton de cerrar la alerta
        cy.get('.min-vh-100 > .m-alert__container > .m-mdc__snackbarSurface > .m-mdc__snackbarActions > .icon-close').click({force:true})
     })    
})