describe('seleccionar tienda', () => {
    it('tienda cd jardín', () => {
       //entramos a página de liverpool
       cy.visit('https://www.liverpool.com.mx/tienda/home')
       //, { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}}
       //en lugar de dar click al boton de buscar, indicamos que se teclee la tecla enter
       //cy.get('#mainSearchbar').type("formula 1").type('{enter}')
       cy.get('.a-header__strongLink > .m-navDesktop__selectstore > .ml-1').click()
       cy.get('#CP').type("09319").type('{enter}')
       //cy.get(".stores-list").should("be.visible")
       cy.get('#store-170').should("be.visible").click()
       cy.log("Prueba correcta")
      })
  
  
  })