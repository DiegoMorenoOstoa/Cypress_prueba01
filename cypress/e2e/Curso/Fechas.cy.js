require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Tipos de fechas', () => {
    
     it('fechas01', () => {
        //entramos a página de de prueba
        cy.visit('https://openui5.hana.ondemand.com/resources/sap/ui/test/starter/Test.qunit.html?testsuite=test-resources%2Fsap%2Fui%2Fcommons%2Fqunit%2Ftestsuite.qunit&test=Datepicker&testId=7a0818f7')
        cy.get('#myDatePicker7-input').type("03.05.2000")  
     })

     it.only('fechas viajes liverpool', () => {
        //entramos a página de de prueba
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        cy.contains("Servicios").trigger("mouseover")
        cy.contains("Viajes").trigger("mouseover")
        cy.contains("Viajes Liverpool").trigger("mouseover").click()
        cy.get('.col-lg-9 > :nth-child(2) > .o-blpMainContent > .d-flex > :nth-child(2) > .o-blpPictureBrandThree_content > .m-blpPictureBrandThree__figure > .m-blpPictureBrandThree__viajesLinks > :nth-child(2) > .a-blpPictureBrandThree__viajes-link > img').click()
        cy.get('#ap_origin_flight').type("MEX Ciudad de México, Distrito Federal, México - Aeropuerto Internacional Licenciado Benito Juarez")
        cy.get('#ap_dest_flight').type("CUN Cancún, Quintana Roo, México - Aeropuerto Internacional Cancun")
        cy.get('#ap_flight_start').clear().type("03/06/2023 {esc}")
        cy.get('#ap_flight_end').clear().type("13/06/2023 {esc}")
        cy.xpath("(//input[@value='Buscar vuelos'])[1]").click({force: true})
        cy.get('#flight0_0_0').click()
        cy.get('#ap_group0 > .fr > .botAzu').click({force: true})
     })
})