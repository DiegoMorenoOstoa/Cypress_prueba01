describe('Funciones type-> TAB', () => {
    it('Type con tap ', () => {
       //entramos a página de liverpool
       cy.visit('https://login-qa.liverpool.com.mx')
       //en lugar de dar click al boton de buscar, indicamos que se teclee la tecla enter
       cy.get('#username').type("fp_qa3_sub@gmail.com")
       cy.get('#password').type("Fp12345678")
       cy.get('.c1b766a1c > .c4163471a').click()
       cy.log("Prueba correcta")
      })
      
  
  })