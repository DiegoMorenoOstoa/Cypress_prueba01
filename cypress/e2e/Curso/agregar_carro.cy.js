require('@cypress/xpath')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('agregar al carro suburbia', () => {
    it('agregar al carro tienda suburbia', () => {
       //entramos a página de de prueba
       cy.visit("https://www.suburbia.com.mx")
       //seleccionamos el elemento elegido de la lista
       cy.get("#mainSearchbar").type("camisa").type("{enter}")
       cy.get('#img_0').click()
       cy.get('#a-edd-modal__btn').should("be.visible",{timeout:10000})
       cy.xpath("(//button[contains(@class,'a-btn a-btn--actionpdp')])[1]").should("be.visible").select("2XG")
       
       //cy.visit('https://qa3.suburbia.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});

    })
    it('agregar al carro tienda liverpool', () => {
        //entramos a página de de prueba
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type("1080377133").type("{enter}")
        cy.get(':nth-child(11) > .o-product__productQty > .mt-2 > .flex-column > .m-stickyBar__qtyInputs > .-add').click()
        cy.get('.arrow_down_states').click({ force: true })
        cy.get('#filters-storeLocator-storeInformation > .modal-dialog > .modal-content > .modal-body > :nth-child(5)').click({ force: true })
        cy.get('#opc_pdp_addCartButton').click({ force: true })
        //verifica el texto de la alerta de cuando se ha agregado al carrito con éxito con have.text
        cy.get('.min-vh-100 > .m-alert__container > .undefinedm-mdc__snackbarSurface > .m-mdc__snackbarLabel').should("have.text","Agregaste un producto a tu bolsa")
        //verifica el texto de la alerta de cuando se ha agregado al carrito con éxito
        cy.get('.min-vh-100 > .m-alert__container > .undefinedm-mdc__snackbarSurface > .m-mdc__snackbarLabel').should("contain.text","Agregaste un producto a tu bolsa").then(() =>{
            
        cy.xpath('//*[@id="__next"]/header/div[3]/div[1]/div/div/div/div[6]/button').click({ force: true })
        //cy.get(".a-btn a-btn--primary a-product__buttonBuy").contains("Comprar")
        })
     })
     it.only('agregar al carro tienda liverpool', () => {
        //entramos a página de de prueba
        cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
        let sku=1080377133
        cy.get("#mainSearchbar").should("be.visible").and("have.class","form-control search-bar plp-no__results").type(sku).type("{enter}")
        cy.get(':nth-child(11) > .o-product__productQty > .mt-2 > .flex-column > .m-stickyBar__qtyInputs > .-add').click()
        cy.get('.arrow_down_states').click({ force: true })
        cy.get('#filters-storeLocator-storeInformation > .modal-dialog > .modal-content > .modal-body > :nth-child(5)').click({ force: true })
        cy.get('#opc_pdp_addCartButton').click({ force: true })
        //verifica el texto de la alerta de cuando se ha agregado al carrito con éxito con have.text
        cy.get('.min-vh-100 > .m-alert__container > .undefinedm-mdc__snackbarSurface > .m-mdc__snackbarLabel').should("have.text","Agregaste un producto a tu bolsa")
        //verifica el texto de la alerta de cuando se ha agregado al carrito con éxito
        cy.get('.min-vh-100 > .m-alert__container > .undefinedm-mdc__snackbarSurface > .m-mdc__snackbarLabel').should("contain.text","Agregaste un producto a tu bolsa").then(() =>{
            
        cy.xpath('//*[@id="__next"]/header/div[3]/div[1]/div/div/div/div[6]/button').click({ force: true })
        cy.xpath("//p[@class='a-inlineElement a-inlineElement--enphasis a-inlineElement--total -enphasisDecimal -alignDecimal']").should("have.text","$1,858.00").wait(2000).then((e)=>{
            let precio=e.text()
            //declaramos una variable con el valor del color del producto
            let precio2=e.text()
            if(precio==precio2)
            {
                cy.log("El total del carrito es de: " + precio + " por lo que se puede realizar la compra")
                cy.get('.t-myBag__toBuy > .a-btn').click()
                cy.log("La compra se realizó de manera exitosa")
            }
           })
        
        })
     })

})