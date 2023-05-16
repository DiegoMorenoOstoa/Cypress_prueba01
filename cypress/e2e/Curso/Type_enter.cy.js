describe('Funciones type-> ENTER', () => {
    it('Dar cllick a la tecla ENTER ', () => {
       //entramos a página de liverpool
       cy.visit('https://qa3.liverpool.com.mx/tienda/home')
       //en lugar de dar click al boton de buscar, indicamos que se teclee la tecla enter
       cy.get('#mainSearchbar').type("formula 1").type('{enter}')
       //cy.get('#mainSearchbar').type('{enter}')
       //cy.get('.input-group-append > .input-group-text').click() 
       cy.log("Prueba correcta")
      })
  
  
  })