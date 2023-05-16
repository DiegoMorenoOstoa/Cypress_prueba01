require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Eventos con el mouse', () => {

     it('mouseover seguros', () => {
        //entramos a página de de prueba
        cy.visit("https://miseguro.liverpool.com.mx/")
        cy.contains("Centro de seguros").trigger("mouseover", {force:true})
        cy.contains("Seguro de Auto").click({force:true})

     })

     
})