require('@cypress/xpath')
import 'cypress-file-upload'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Cargar archivos en web', () => {
    
     it('subir un archivo', () => {
        //entramos a página de de prueba
        cy.visit("https://demoqa.com/automation-practice-form")
        const imagen='firma.jpg'
        cy.get('[type=file]').attachFile(imagen)
        
     })

})