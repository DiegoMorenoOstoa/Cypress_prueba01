require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
const neatCSV = require('neat-csv')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('importar cv prueba 04 ', () => {
    before(function(){
        cy.fixture('contact.csv').then(neatCSV).then(function(data){
            globalThis.data = data
        })

})
  it('csv prueba 04', () => {
    //entramos a página de de prueba
       cy.viewport('macbook-16')
       cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
       cy.get('.order-lg-4 > .a-header__topLink').click()
       cy.get('#username').type(data.email)
       cy.get('#password').type(data.password)
       cy.log("Prueba correcta")
    })

    })

