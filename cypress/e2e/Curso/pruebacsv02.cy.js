require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
const neatCSV = require('neat-csv')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('importar csv prueba 02 ', () => {
    
  it.only('importar csv prueba 01', () => {
    //entramos a página de de prueba
       
    cy.fixture("prueba01").then((data) =>{
        this.key = data
       cy.viewport('macbook-16')
       cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
       cy.get('.order-lg-4 > .a-header__topLink').click()
       cy.get('#username').type(this.key.data1)
       cy.log("Prueba correcta")
    })

    })
  })

