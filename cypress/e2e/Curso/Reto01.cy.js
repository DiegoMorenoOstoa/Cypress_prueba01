describe('Reto 01', () => {
    it('Proceso de compra', () => {
       //entramos a página de suburbia
       cy.visit('https://qa3.suburbia.com.mx/tienda/home')
       //busca la barra de busquda y escribe algo y lo borra y verifica que este visible ese lemento
       cy.get('#mainSearchbar').should("be.visible").should("be.enabled").type("formula 1").clear()
       //despliega la lista de categorias
       cy.get('.o-navDesktop > .m-navDesktop__menuList > .m-navDesktop__section > .a-header__strongLink').click()
       cy.wait(2000)
       //selecciona la categoria mujer
       cy.get("div[class='o-navDesktop'] div div:nth-child(1) li:nth-child(1) a:nth-child(1) div:nth-child(1) div:nth-child(1) span:nth-child(1)").click()
       //seleciona la categoria "ver todo"
       cy.get(':nth-child(1) > .a-category__listElement').click()
       //selecciona la categoria de la lista 
       cy.get("a[class='a-category__listElement']").click()
       //da click al producto elegdo
       cy.get('[data-prodid="1030528901"] > a > .m-plp-card-container > .m-figureCard__figure > .o-card__image__container > .section_img_size').click()
       //agrega 1 cantidad de productos
       //cy.get('.mt-2 > .flex-column > .m-stickyBar__qtyInputs > .-add').click()
       cy.get('.mt-2 > .flex-column > .m-stickyBar__qtyInputs > .-add').type("2")
       //da click al boton agregar al carro
       cy.get('#opc_pdp_addCartButton').click()
       //consulta su carrito
       cy.get('.a-header__bag > span').click()
       //dar click en boton comprar
       cy.get('.opc_sticky_button > .a-btn').click()
       cy.log("prueba correcta")
      })
      
  })