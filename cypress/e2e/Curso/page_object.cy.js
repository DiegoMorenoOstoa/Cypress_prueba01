import Proyecto01 from '../../support/pageObjects/liverpool/liverpool01.js'
require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
const neatCSV = require('neat-csv')
Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from
// failing the test
    return false
})
describe('page object model', () => {
    const master=new Proyecto01()
    beforeEach('entrar a página',() =>{
        master.before_visit()
    })
    it.only('prueba page object model', () => {
        master.inicio_sesion02("diego@gmail.com","1234")
        master.buscar_sku(1131762221)
    })
})
