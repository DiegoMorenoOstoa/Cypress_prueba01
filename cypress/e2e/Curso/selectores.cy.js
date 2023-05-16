require('@cypress/xpath')
describe('Selectores', () => {
    it('selector de ID', () => {
       //entramos a página de suburbia
       cy.visit('https://qa3.suburbia.com.mx/tienda/home')
      
       cy.get('#mainSearchbar').should("be.visible").should("be.enabled").type("formula 1").type('{enter}')
       cy.log("prueba correctaaa")
      })
      it('selector de atributos', () => {
        //entramos a página de suburbia
        cy.visit('https://qa3.suburbia.com.mx/tienda/home')
        cy.get("[placeholder='Buscar...']").should("be.visible").should("be.enabled").type("formula 1").clear()
        cy.log("prueba correcta")
       })
       it('selector XPATH ', () => {
        //entramos a página de suburbia
        cy.visit('https://qa3.suburbia.com.mx/tienda/home')
        //cy.xpath('//*[@id="mainSearchbar"]').should("be.visible").should("be.enabled").type("formula 1").clear()
        cy.xpath("//input[contains(@id,'mainSearchbar')]").type("iphone").type('{enter}')
        cy.log("prueba correcta")
       })
       it.only('selector Contains', () => {
        //entramos a página de suburbia
        cy.visit('https://qa3.suburbia.com.mx/tienda/home')
        cy.get(".o-nav-desktop-menu").contains("Servicios").click()
        cy.log("prueba correcta")
       })
       it('selector XPATH con OR', () => {
        //entramos a página de suburbia
        cy.visit('https://qa3.suburbia.com.mx/tienda/home')
        cy.xpath("//input[@id='mainSearchbar' or @placeholder='Buscar...']").type("iphone").type('{enter}')
        cy.log("prueba correcta")
       })
       it('selector XPATH con AND', () => {
        //entramos a página de suburbia
        cy.visit('https://qa3.suburbia.com.mx/tienda/home')
        cy.xpath("//input[@id='mainSearchbar'and @type='text']").type("iphone").type('{enter}')
        cy.log("prueba correcta")
       })
       it.only('selector XPATH con texto', () => {
        //entramos a página de suburbia
        cy.visit('www.liverpool.com.mx', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        cy.xpath("//a[text()='Venta Nocturna']").click()
        cy.log("prueba correcta")
       })

       it('selector XPATH con contains', () => {
        //entramos a página de suburbia
        cy.visit('www.liverpool.com.mx', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        cy.xpath("//a[contains(text(),'Venta Nocturna')]").click()
        cy.log("prueba correcta")
       })
      
  })
  