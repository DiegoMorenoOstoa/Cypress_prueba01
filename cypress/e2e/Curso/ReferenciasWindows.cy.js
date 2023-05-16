require('@cypress/xpath')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Validaciones windows', () => {
    
     it('validar charset de la página', () => {
        //entramos a página de de prueba
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //validación del charset
        cy.document().should("have.property","charset").and("eq","UTF-8")
        
        })
     it('validar url', () => {
            //entramos a página de de prueba
            cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
            //validamos que la pagin tenga el url correcto
            cy.url().should("include","https://www.liverpool.com.mx/tienda/home")
            cy.url().should("eq","https://www.liverpool.com.mx/tienda/home")
            })
     })

