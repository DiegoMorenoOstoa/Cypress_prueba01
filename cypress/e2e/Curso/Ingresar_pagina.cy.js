describe('Bienvenido a liverpool', () => {
  it('Visista main.html-> visitar página liverpool', () => {
    cy.visit('https://liverpool.com.mx')
  })

  it('Segundo test -> hola mundo', () => {
    cy.log("hola mundo del  test")
    //esperar en milisegundos
    cy.wait(1000)
  })

  it('tercer test -> campo buscar, escribir busqueda y dar click', () => {
    //visitar página
    cy.visit("https://liverpool.com.mx")
    //entrar a la pagina y apuntar al siguiente elemento y escribir en el elemento y dar click a un boton 
    cy.get('#mainSearchbar').type("formula 1")
    cy.get('.input-group-append > .input-group-text').click()
  })
})
