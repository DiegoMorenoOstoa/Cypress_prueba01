require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
const neatCSV = require('neat-csv')
Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from
// failing the test
    return false
})
describe('hooks', () => {
    before(() => {
        cy.log("1.- ***** Principio de todo ********")
        })

    beforeEach(() => {
        cy.log("2.- Esto se repite al inicio de cada uno de los test(it)")
        })
    afterEach(() => {
        cy.log("3.- esto se repite al final cada uno de los test(it)")
        })
    after(() => {
        cy.log("4.- **** utlimo ciclo-final de tdoa la prueba *****")
        })
    it('hooks 01', () => {
        cy.log("test hook 01")
    })
    it('hooks 02', () => {
        cy.log("test hook 02")
    })
    it('hooks 03', () => {
        cy.log("test hook 03")
    })


})