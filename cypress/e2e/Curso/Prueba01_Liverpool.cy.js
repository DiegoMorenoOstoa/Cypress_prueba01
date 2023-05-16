require('@cypress/xpath')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Proceso de compra de un sku', () => {
    
     it('agregar al carro en tienda liverpool', () => {
        //entramos a página de de prueba
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        //declaramos la variable con el SKU de un producto en la página
        let sku=1080377133
        //buscamos la barra de busqueda e ingresamos el sku declarado
        cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type(sku).type("{enter}")
        cy.wait(2000)
        //damos click al boton de agregar un producto mas
        cy.get(':nth-child(11) > .o-product__productQty > .mt-2 > .flex-column > .m-stickyBar__qtyInputs > .-add').click({ force: true })
        //desplegamos el selector de las tallas
        cy.get('.arrow_down_states').click({ force: true })
        //seleccionamos la talla a elegir
        cy.get('#filters-storeLocator-storeInformation > .modal-dialog > .modal-content > .modal-body > :nth-child(1)').click({ force: true })
        //damos click al boton de agregar al carro
        cy.get('#opc_pdp_addCartButton').click({ force: true })
        //verifica el texto de la alerta de cuando se ha agregado al carrito con éxito
        cy.wait(4000)
        cy.contains("Agregaste un producto a tu bolsa").should("contain.text","Agregaste un producto a tu bolsa").then(() =>{     
        cy.xpath('//*[@id="__next"]/header/div[3]/div[1]/div/div/div/div[6]/button').click({ force: true })
        cy.wait(2000)
        cy.xpath("//p[@class='a-inlineElement a-inlineElement--enphasis a-inlineElement--total -enphasisDecimal -alignDecimal']").should("have.text","$929.00").then((e)=>{
            //declaramos una variable con el valor del precio del producto
            let precio=e.text()
            //condiciona para que el precio sea igual a la variable declarada
            if(precio=="$929.00")
            {
                cy.log("El total del carrito es de: " + precio + " por lo que se puede realizar la compra")
                //click al botn comprar
                cy.get('.t-myBag__toBuy > .a-btn').click()
                cy.log("La compra se realizó de manera exitosa")
                cy.wait(3000)
                cy.get('#username').type("liverpoolprueba01@gmail.com")
                cy.get('#password').type("dhola")
                cy.wait(3000)
                cy.contains("Iniciar sesión").click({force:true})
            }
           })
        
        })
     })

})