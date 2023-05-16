require('@cypress/xpath')
describe('Funciones asserts', () => {
    it('Type con tab', () => {
       //entramos a página de liverpool
       cy.visit('https://qa3.liverpool.com.mx/tienda/home')
       //validamos que el campo o elemento es visible y habilitado para la maquina
       cy.get('#mainSearchbar').should("be.visible").should("be.enabled").type("formula 1")
       cy.get('.icon-zoom').click()
      })
      //force:true nos sirve para implementar un click a la fuerza sobre algun elemento mapeado
      //cy.get('#mainSearchbar').should("be.visible").should("be.enabled").type("formula 1").click({force: true})
  

      //x,y nos ayuda a dar click a un elemento mediante coordenadas establecidas
      //cy.get('#mainSearchbar').should("be.visible").should("be.enabled").type("formula 1").click(50,5)

      it('assert con contains', () => {
       //entramos a página de de prueba
       cy.visit('https://qa3.liverpool.com.mx/tienda/home')
       //seleccionamos el elemento base
       cy.get('.o-navDesktop > .m-navDesktop__menuList > .m-navDesktop__section').click()
       cy.wait(2000)
       //seleccionamos el elemento de la lista que queremos validar
       cy.xpath("(//span[contains(.,'Ella')])[1]")
       //indicamos que contenga el texto ella
       cy.get(".col-lg-10").should("be.visible").contains("Ella")
       
       })
       it('assert eq', () => {
        //entramos a página de de prueba
        cy.visit('https://www.suburbia.com.mx')
        //seleccionamos el elemento base
        cy.get('.o-navDesktop > .m-navDesktop__menuList > .m-navDesktop__section > .a-header__strongLink').click()
        cy.wait(2000)
        //seleccionamos el elemento de la lista que queremos validar
       cy.xpath("(//span[contains(.,'Hombre')])[1]")
       //indicamos que contenga el texto "hombre" y damos click
       cy.get(".col-lg-10").should("be.visible").contains("Hombre").click()
       //ingresamos a la categoria donde se encuentra el producto
       cy.get('.col-lg-9 > :nth-child(2) > .contaier-fluid > :nth-child(2) > :nth-child(2) > .m-mainBanner__link > .img-zoom > #mainBanner').click()
       // obtenemos la clase madre de la lista de productos, que encuentre una clase especifica y seleccione el 2do elemento de la lista
       cy.get(".m-plp-card-container").find(".o-card__image__container").eq(1).click()
        })

        it('validar texto página', () => {
            //entramos a página de de prueba
            cy.visit('https://www.suburbia.com.mx')
            //seleccionamos el elemento base
            cy.get('.o-navDesktop > .m-navDesktop__menuList > .m-navDesktop__section > .a-header__strongLink').click()
            cy.wait(2000)
            //seleccionamos el elemento de la lista que queremos validar
           cy.xpath("(//span[contains(.,'Hombre')])[1]")
           //indicamos que contenga el texto "hombre" y damos click
           cy.get(".col-lg-10").should("be.visible").contains("Hombre").click()
           //ingresamos a la categoria donde se encuentra el producto
           cy.get('.col-lg-9 > :nth-child(2) > .contaier-fluid > :nth-child(2) > :nth-child(2) > .m-mainBanner__link > .img-zoom > #mainBanner').click()
           // obtenemos la clase madre de la lista de productos, que encuentre una clase especifica y seleccione el 2do elemento de la lista
           cy.get(".m-plp-card-container").find(".o-card__image__container").eq(1).click()
           //indicamos el elemento donde se mande a llamar el color del producto
           cy.get('.m-product__colors').then((e)=>{
            cy.log(e.text())
            let color=e.text()
            cy.log(color)
            //declaramos una variable con el valor del color del producto
            let color2=e.text()
            if(color==color2)
            {
                cy.log(color)
                cy.log("El " + color + "pertenece al producto seleccionado")
            }
           })
            })
            it.only('validar precio página', () => {
                //entramos a página de de prueba
                cy.visit('https://www.suburbia.com.mx')
                //seleccionamos el elemento base
                cy.get('.o-navDesktop > .m-navDesktop__menuList > .m-navDesktop__section > .a-header__strongLink').click()
                cy.wait(2000)
                //seleccionamos el elemento de la lista que queremos validar
               cy.xpath("(//span[contains(.,'Hombre')])[1]")
               //indicamos que contenga el texto "hombre" y damos click
               cy.get(".col-lg-10").should("be.visible").contains("Hombre").click()
               //ingresamos a la categoria donde se encuentra el producto
               cy.get('.col-lg-9 > :nth-child(2) > .contaier-fluid > :nth-child(2) > :nth-child(2) > .m-mainBanner__link > .img-zoom > #mainBanner').click()
               // obtenemos la clase madre de la lista de productos, que encuentre una clase especifica y seleccione el 2do elemento de la lista
               cy.get(".m-plp-card-container").find(".o-card__image__container").eq(1).click()
               //indicamos el elemento donde se mande a llamar el precio del producto
               cy.get('.a-product__paragraphDiscountPrice').then((e)=>{
                cy.log(e.text())
                let precio=e.text()
                cy.log(precio)
                //indicamos que a la variable precio le quite posiciones del numero 
                precio=precio.slice(1,4)
            //declaramos una variable con el valor del valor del producto
            let precio2=e.text()
            precio2=precio2.slice(1,4)
            if(precio==precio2)
            {
                cy.log(precio)
                cy.log("El precio de: " + precio + " pertenece al producto seleccionado")
                
            }
                
               })
                })
  })