require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
const neatCSV = require('neat-csv')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('importar csv ', () => {
  //declaraos variable global
    let table
    before (() => {
    //importamos el archivo csv y lo lee
    cy.fixture("contact.csv").then(neatCSV).then(data => {
    // a la variable global le asignamos el valor de dato
      table = data
    })
    //imprimimos el valor de table en consola
    cy.then(console.table)

})

  it('importar csv prueba 02', () => {
       cy.viewport('macbook-16')
       cy.log(table)
       cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
       //visitamos la parte de iniciar sesión
       cy.get('.order-lg-4 > .a-header__topLink').click()
       cy.get('#username').type(table[1]['email'])
       cy.get('#password').type(table[1]['password'])
       cy.log("Prueba correcta")

  })
  it('importar csv prueba 03 con ciclo for', () => {
    for (let i=0; i<=2; i++)
    {
       cy.viewport('macbook-16')
       cy.log(table)
       cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
      //visitamos la parte de iniciar sesión
       cy.get('.order-lg-4 > .a-header__topLink').click()
       //ahora la varible i va a ir recorriendo los prametros de objeto table
       cy.get('#username').type(table[i]['email'])
       cy.get('#password').type(table[i]['password'])
       cy.log("Prueba correcta")
    }
  })

  it.only('importar csv prueba 03 con ciclo for con lenght', () => {
    //declramos variable con un arreglo que contenga los datos de table
    const datos=[table]
    for (let i=0; i<=datos.length; i++)
    {
       cy.viewport('macbook-16')
       cy.log(table)
       cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
      //visitamos la parte de iniciar sesión
       cy.get('.order-lg-4 > .a-header__topLink').click()
       //ahora la varible i va a ir recorriendo los prametros de objeto table
       cy.get('#username').type(table[i]['email'])
       cy.get('#password').type(table[i]['password'])
       cy.log("Prueba correcta")
    }
  })



})

