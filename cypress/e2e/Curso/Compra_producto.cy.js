require('@cypress/xpath')
describe('Proceso de compra', () => {
    it('Compra de un producto', () => {
       //entramos a página de suburbia
       cy.visit('https://qa3.suburbia.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
       
       //en lugar de dar click al boton de buscar, indicamos que se teclee la tecla enter
      
      })
      
  })