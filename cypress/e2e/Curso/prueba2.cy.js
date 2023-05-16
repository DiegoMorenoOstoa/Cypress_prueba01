describe('Bienvenido a liverpool', () => {
  it('Validar título -> Titulo corresponde con la página', () => {
      //validar un texto en especifico
      cy.visit('www.liverpool.com.mx', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
      cy.get('#mainSearchbar').type("formula 1").type('{enter}')
      cy.log("Prueba correcta")
})



})
