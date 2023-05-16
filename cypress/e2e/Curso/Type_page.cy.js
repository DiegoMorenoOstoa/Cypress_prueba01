describe('Funciones type-> PageUp y Pagedown', () => {
    it('Hacer un Type page up(scroll hacia arriba)', () => {
       //entramos a página de liverpool
       cy.visit('https://liverpool.com.mx')
               //indicamos que cuendo obtenga el elemento de un scroll hacia arriba
       cy.get(".a-header__logo").type('{pageup}')
       cy.wait(5000)
      })
      
      it('Hacer un Type page down(scroll hacia abajo)', () => {
        //entramos a página de liverpool
        cy.visit('https://liverpool.com.mx')
        //indicamos que cuendo obtenga el elemento de un scroll hacia abajo
        cy.get(".a-header__logo").type('{pagedown}')
        cy.wait(5000)
       })
  
  })