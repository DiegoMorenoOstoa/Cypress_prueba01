describe('Bienvenido a liverpool', () => {
  it('Validar título -> Titulo corresponde con la página', () => {
      //validar un texto en especifico
      cy.visit('https://liverpool.com.mx')
      cy.title().should('eq','Liverpool es parte de Mi vida')
      cy.log("El titulo de la página es correcto")
   
    })


})