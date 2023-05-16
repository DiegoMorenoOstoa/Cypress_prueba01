require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
const neatCSV = require('neat-csv')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('importar json ', () => {
    before(function(){
      //lee el json llamado prueba01
        cy.fixture("prueba01").then(function(data){
          //declramos el objeto como variable global
            globalThis.data = data
        })
    })
  it('fixture json 01', () => {
       cy.viewport('macbook-16')
       cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
       //ingresamos a la parte de iniciar sesión
       cy.get('.order-lg-4 > .a-header__topLink').click()
       cy.get('#username').type(data.email)
       cy.get('#password').type(data.password)
       cy.log("Prueba correcta")
  })

  it.only('fixture json 02', () => {
    //tomamos los valores del fixture y se almacenan en un arreglo
    cy.fixture("prueba01").then((testdata) => {
      testdata.forEach((datos) => {
        const dato_email=datos.email
        const dato_password=datos.password
        cy.viewport('macbook-16')
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //ingresamos a la parte de iniciar sesión
        cy.get('.order-lg-4 > .a-header__topLink').click()
        cy.get('#username').type(dato_email)
        cy.get('#password').type(dato_password)
        cy.log("Prueba correcta")
      }) 
    })
  })
})

