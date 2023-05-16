require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Eventos con el mouse', () => {
    
     it('drag and drop', () => {
        //entramos a página de de prueba
        cy.visit('https://demo.automationtesting.in/Static.html')
        cy.wait(2000)
        cy.get('#angular').drag("#droparea",{force: true})
        cy.get('#mongo').drag("#droparea",{force: true})
        cy.get('#node').drag("#droparea",{force: true})
        
     })


     it.only('mouseover', () => {
        //entramos a página de de prueba
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        cy.contains("Categorías").trigger("mouseover")
        cy.contains("Hombre").click()
        cy.get(':nth-child(1) > .a-category__listElement').click()
     })

     it('range slider', () => {
        //entramos a página de de prueba
        cy.visit("https://designsystem.morningstar.com/test/components/range-sliders.html")
        cy.get(':nth-child(1) > .mds-test-background-column--no-background > .mds-range-slider > .mds-range-slider__base > .mds-range-slider__origin > .mds-range-slider__handle').invoke("attr","aria-valuetext","60")
     })

})