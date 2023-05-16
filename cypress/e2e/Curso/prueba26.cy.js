Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Proceso de compra de un sku', () => {
    
     it('agregar al carro en tienda liverpool', () => {
        //entramos a página de de prueba
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //declaramos la variable con el SKU de un producto en la página
        let sku=1080377133
        //buscamos la barra de busqueda e ingresamos el sku declarado
        cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type(sku).type("{enter}")
        cy.wait(2000)
        //damos click al boton de agregar un producto mas
        
     })

})