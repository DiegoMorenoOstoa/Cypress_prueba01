require('@cypress/xpath')
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('invoke', () => {

     it('invoke text', () => {
        cy.viewport('macbook-16')
        //entramos a página de de prueba
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //obtenemos el elemento qu contiene el texto
        cy.get(':nth-child(4) > .a-header__strongLink').invoke("text").as("byd")
        cy.get("@byd").should("contain","BYD").then(()=>{
            cy.get(':nth-child(4) > .a-header__strongLink').click({force:true})
        })
     }) 
    it('invoke style', () => {
        cy.viewport('macbook-16')
        //entramos a página de de prueba
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //obtenemos el elemento qu contiene el texto
        cy.get(':nth-child(4) > .a-header__strongLink').invoke("attr","style","color:red;font-size:20px;font-weight:bold")
     }) 
     
     it('invoke coultar y mostratr', () => {
        cy.viewport('macbook-16')
        //entramos a página de de prueba
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //obtenemos el elemento qu contiene el texto
        cy.get(':nth-child(4) > .a-header__strongLink').invoke("hide","2s")
        cy.get(':nth-child(4) > .a-header__strongLink').invoke("show","2s")
     }) 
     it('src', () => {
        cy.viewport('macbook-16')
        //entramos a página de de prueba
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //obtenemos el elemento que contiene la imagen
        cy.xpath("//img[contains(@alt,'Tablets | Liverpool')]").invoke("attr","src").should("include","https://assetspwa.liverpool.com.mx/assets/digital/home/img/may23/bpromo01e_090523tab.jpg")
     })
     it.only('target', () => {
        cy.viewport('macbook-16')
        //entramos a página de de prueba
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //obtenemos el elemento que contiene el atributo target
        cy.xpath("(//a[contains(@class,'a-boutique__link strong')])[1]").invoke("removeAttr","target")
     }) 

})